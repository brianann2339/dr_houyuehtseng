import type { MetadataRoute } from "next";
import { pageUrl } from "./i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: pageUrl("zh", "home") },
    { url: pageUrl("zh", "research") },
    { url: pageUrl("en", "home") },
    { url: pageUrl("en", "research") },
    { url: pageUrl("ja", "home") },
    { url: pageUrl("ja", "research") },
  ];
}
