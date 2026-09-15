import type { MetadataRoute } from "next";

const siteUrl = "https://atcsltd.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/web-design", "/products", "/contact"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-09-12"),
  }));
}
