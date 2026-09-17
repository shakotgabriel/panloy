import type { MetadataRoute } from "next";
import { searchIndex } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return searchIndex.map((item) => ({
    url: `https://panloygroup.com.ss${item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.6,
  }));
}
