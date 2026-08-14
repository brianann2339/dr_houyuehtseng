import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const basePath = "/dr_houyuehtseng";
const siteRoot = "https://brianann2339.github.io/dr_houyuehtseng";

async function artifact(pathname) {
  return readFile(new URL(`../pages-dist/${pathname}`, import.meta.url), "utf8");
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
    research,
    new RegExp(`<link rel="canonical" href="${siteRoot}/research/"`),
  );
  assert.match(home, new RegExp(`href="${basePath}/research/"`));
  assert.match(home, new RegExp(`src="${basePath}/portrait\\.jpg"`));
  assert.match(home, new RegExp(`href="${basePath}/assets/site\\.css"`));
  assert.match(research, new RegExp(`href="${basePath}/#experience"`));
  assert.doesNotMatch(`${home}${research}`, /rel="modulepreload"/i);
  assert.doesNotMatch(`${home}${research}`, /<script(?![^>]*application\/ld\+json)/i);
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
