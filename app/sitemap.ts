import type { MetadataRoute } from "next";
import { homeUrl, researchUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: homeUrl }, { url: researchUrl }];
}
