import type { MetadataRoute } from "next";
import { siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = [...new Set(siteRoutes)];
  return unique.map((href) => ({
    url: `https://panloygroup.com.ss${href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href.split("/").length <= 2 ? 0.7 : 0.5,
  }));
}
