import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const basePath = "/dr_houyuehtseng";
const siteRoot = "https://brianann2339.github.io/dr_houyuehtseng";

async function artifact(pathname) {
  return readFile(new URL(`../pages-dist/${pathname}`, import.meta.url), "utf8");
}

function visitorCounterScript(html) {
  const match = html.match(
    /<script\b[^>]*data-static-script="visitor-counter"[^>]*>([\s\S]*?)<\/script>/i,
  );
  assert.ok(match, "visitor counter script is present");
  return match[1];
}

function counterContext({
  localDate = [2026, 8, 21],
  storage = new Map(),
  storageDenied = false,
  value = 1234,
  pending = false,
} = {}) {
  const number = { textContent: "…" };
  const wrapper = { hidden: false };
  const requests = [];

  class MockDate {
    getFullYear() {
      return localDate[0];
    }

    getMonth() {
      return localDate[1] - 1;
    }

    getDate() {
      return localDate[2];
    }

    toISOString() {
      return localDate[3] ?? `${localDate[0]}-01-01T00:00:00.000Z`;
    }

    static now() {
      return 1;
    }
  }

  const context = {
    Date: MockDate,
    document: {
      getElementById(id) {
        return id === "visitor-count-number" ? number : wrapper;
      },
    },
    fetch(url) {
      requests.push(url);
      if (pending) return new Promise(() => {});
      return Promise.resolve({
        ok: true,
        json: async () => ({ data: { up_count: value } }),
      });
    },
    localStorage: {
      getItem(key) {
        if (storageDenied) throw new Error("storage denied");
        return storage.get(key) ?? null;
      },
      removeItem(key) {
        if (storageDenied) throw new Error("storage denied");
        storage.delete(key);
      },
      setItem(key, nextValue) {
        if (storageDenied) throw new Error("storage denied");
        storage.set(key, nextValue);
      },
    },
    location: {
      hostname: "brianann2339.github.io",
      protocol: "https:",
    },
  };

  return { context, number, requests, storage, wrapper };
}

async function settle() {
  await new Promise((resolve) => setImmediate(resolve));
}

test("exports a static GitHub Pages artifact", async () => {
  await Promise.all([
    access(new URL("../pages-dist/index.html", import.meta.url)),
    access(new URL("../pages-dist/research/index.html", import.meta.url)),
    access(new URL("../pages-dist/assets/site.css", import.meta.url)),
    access(new URL("../pages-dist/portrait.jpg", import.meta.url)),
    access(new URL("../pages-dist/.nojekyll", import.meta.url)),
  ]);

  const [home, research] = await Promise.all([
    artifact("index.html"),
    artifact("research/index.html"),
  ]);

  assert.match(home, new RegExp(`<link rel="canonical" href="${siteRoot}/"`));
  assert.match(
    home,
    /<meta name="google-site-verification" content="z9Oqz_ZatY5FOe1Uk2-7pk9zyFW01yl94YoX3nyf8mA"/,
  );
  assert.match(
    research,
    new RegExp(`<link rel="canonical" href="${siteRoot}/research/"`),
  );
  assert.match(home, new RegExp(`href="${basePath}/research/"`));
  assert.match(home, new RegExp(`src="${basePath}/portrait\\.jpg"`));
  const cssDir = new URL("../dist/client/_next/static/css/", import.meta.url);
  const cssFiles = (await readdir(cssDir)).filter((file) => file.endsWith(".css"));
  assert.equal(cssFiles.length, 1);
  const stylesheet = `${basePath}/assets/site.css?v=${encodeURIComponent(cssFiles[0])}`;
  for (const html of [home, research]) {
    assert.ok(html.includes(`href="${stylesheet}"`));
  }
  const [builtCss, exportedCss] = await Promise.all([
    readFile(new URL(cssFiles[0], cssDir)),
    readFile(new URL("../pages-dist/assets/site.css", import.meta.url)),
  ]);
  assert.deepEqual(exportedCss, builtCss);
  assert.match(research, new RegExp(`href="${basePath}/#experience"`));
  assert.doesNotMatch(`${home}${research}`, /rel="modulepreload"/i);
  const staticPages = `${home}${research}`;
  assert.equal(
    (staticPages.match(/data-static-script="visitor-counter"/g) ?? []).length,
    2,
  );
  assert.equal(
    (
      staticPages.match(
        /https:\/\/api\.counterapi\.dev\/v2\/yueh-tseng-hou\/yueh-tseng-hou-visits/g,
      ) ?? []
    ).length,
    2,
  );
  const withoutAllowedScripts = staticPages
    .replace(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi,
      "",
    )
    .replace(
      /<script\b[^>]*data-static-script="visitor-counter"[^>]*>[\s\S]*?<\/script>/gi,
      "",
    );
  assert.doesNotMatch(withoutAllowedScripts, /<script\b/i);
  assert.doesNotMatch(`${home}${research}`, /\/_next\//);
});

test("exports GitHub Pages crawl metadata", async () => {
  const [robots, sitemap] = await Promise.all([
    artifact("robots.txt"),
    artifact("sitemap.xml"),
  ]);

  assert.match(robots, new RegExp(`Sitemap: ${siteRoot}/sitemap\\.xml`));
  assert.match(robots, /Host: https:\/\/brianann2339\.github\.io/);
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
    [`${siteRoot}/`, `${siteRoot}/research/`],
  );
});

test("exports original feedback images with GitHub Pages paths", async () => {
  const home = await artifact("index.html");
  const images = [...home.matchAll(/<img\b[^>]*src="([^"]*\/feedback\/[^"]+)"/g)];
  assert.equal(images.length, 3);

  for (const [, src] of images) {
    assert.ok(src.startsWith(`${basePath}/feedback/`));
    assert.ok(home.includes(`href="${src}"`));
    const pathname = src.slice(basePath.length);
    const [source, exported] = await Promise.all([
      readFile(new URL(`../public${pathname}`, import.meta.url)),
      readFile(new URL(`../pages-dist${pathname}`, import.meta.url)),
    ]);
    assert.deepEqual(exported, source);
  }
});

test("counts at most once per local day and hides invalid responses", async () => {
  const home = await artifact("index.html");
  const script = visitorCounterScript(home);
  const storage = new Map();
  const localDate = [2026, 8, 21, "2026-08-20T23:30:00.000Z"];

  const first = counterContext({ localDate, pending: true, storage });
  vm.runInNewContext(script, first.context);
  assert.match(first.requests[0], /\/up\?t=1$/);
  assert.equal(storage.get("yueh_tseng_hou_visit_day_v1"), "2026-08-21");

  const concurrent = counterContext({
    localDate: [2026, 8, 21, "2026-08-21T00:30:00.000Z"],
    storage,
  });
  vm.runInNewContext(script, concurrent.context);
  await settle();
  assert.doesNotMatch(concurrent.requests[0], /\/up\b/);

  const denied = counterContext({ storageDenied: true });
  vm.runInNewContext(script, denied.context);
  await settle();
  assert.doesNotMatch(denied.requests[0], /\/up\b/);

  for (const value of [null, -1, 1.5]) {
    const invalid = counterContext({ value });
    vm.runInNewContext(script, invalid.context);
    await settle();
    assert.equal(invalid.wrapper.hidden, true);
    assert.equal(invalid.number.textContent, "…");
    assert.equal(invalid.storage.has("yueh_tseng_hou_visit_day_v1"), false);
  }
});
