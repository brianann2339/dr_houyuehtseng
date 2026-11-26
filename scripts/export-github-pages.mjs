import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { siteBasePath } from "../app/site.ts";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(projectRoot, "pages-dist");
const clientDir = join(projectRoot, "dist", "client");
const cssDir = join(clientDir, "_next", "static", "css");
const cssFiles = (await readdir(cssDir)).filter((file) => file.endsWith(".css"));

if (cssFiles.length !== 1) {
  throw new Error(`Expected one stylesheet, found ${cssFiles.length}`);
}

const workerUrl = pathToFileURL(join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

async function render(pathname, accept) {
  const response = await worker.fetch(
    new Request(new URL(pathname, "http://localhost/"), {
      headers: { accept },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Unable to render ${pathname}: HTTP ${response.status}`);
  }

  return response.text();
}

function prefixRootPath(attribute, quote, value) {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return `${attribute}=${quote}${value}${quote}`;
  }

  if (value === siteBasePath || value.startsWith(`${siteBasePath}/`)) {
    return `${attribute}=${quote}${value}${quote}`;
  }

  const [pathname, fragment] = value.split("#", 2);
  const directoryRoutes = new Set([
    "/research",
    "/en",
    "/en/research",
    "/ja",
    "/ja/research",
  ]);
  const normalizedPath = directoryRoutes.has(pathname) ? `${pathname}/` : pathname;
  const normalizedValue = fragment === undefined ? normalizedPath : `${normalizedPath}#${fragment}`;

  return `${attribute}=${quote}${siteBasePath}${normalizedValue}${quote}`;
}

function toStaticHtml(html, lang) {
  const withoutRuntime = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) =>
      /type=["']application\/ld\+json["']|data-static-script=["']visitor-counter["']/i.test(
        script,
      )
        ? script
        : "",
    )
    .replace(/<link\b[^>]*>/gi, (link) =>
      /rel=["']modulepreload["']/i.test(link) ? "" : link,
    )
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/\sdata-precedence=["'][^"']*["']/gi, "");

  return withoutRuntime
    .replace(/<html\s+lang=(['"])[^'"]*\1/i, `<html lang="${lang}"`)
    .replace(/\b(href|src)=(["'])([^"']*)\2/gi, (_, attribute, quote, value) =>
      prefixRootPath(attribute, quote, value),
    )
    .replace(
      new RegExp(
        `href=(["'])${siteBasePath}/_next/static/css/[^"']+\\1`,
        "i",
      ),
      `href="${siteBasePath}/assets/site.css?v=${encodeURIComponent(cssFiles[0])}"`,
    );
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(join(outputDir, "assets"), { recursive: true });

const pages = [
  { pathname: "/", output: "index.html", lang: "zh-Hant" },
  { pathname: "/research", output: "research/index.html", lang: "zh-Hant" },
  { pathname: "/en", output: "en/index.html", lang: "en" },
  { pathname: "/en/research", output: "en/research/index.html", lang: "en" },
  { pathname: "/ja", output: "ja/index.html", lang: "ja" },
  { pathname: "/ja/research", output: "ja/research/index.html", lang: "ja" },
];

const [renderedPages, robots, sitemap] = await Promise.all([
  Promise.all(
    pages.map(async (page) => ({
      ...page,
      html: await render(page.pathname, "text/html"),
    })),
  ),
  render("/robots.txt", "text/plain"),
  render("/sitemap.xml", "application/xml"),
]);

await Promise.all(
  renderedPages.map((page) =>
    mkdir(dirname(join(outputDir, page.output)), { recursive: true }),
  ),
);

await Promise.all([
  ...renderedPages.map((page) =>
    writeFile(join(outputDir, page.output), toStaticHtml(page.html, page.lang)),
  ),
  writeFile(join(outputDir, "robots.txt"), robots),
  writeFile(join(outputDir, "sitemap.xml"), sitemap),
  writeFile(join(outputDir, ".nojekyll"), ""),
  cp(join(clientDir, "portrait.jpg"), join(outputDir, "portrait.jpg")),
  cp(join(clientDir, "feedback"), join(outputDir, "feedback"), { recursive: true }),
]);

await cp(join(cssDir, cssFiles[0]), join(outputDir, "assets", "site.css"));
