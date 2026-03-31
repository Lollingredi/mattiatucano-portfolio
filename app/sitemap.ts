import type { MetadataRoute } from "next";

const BASE_URL = "https://mattiatucano.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/storyboards", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/character-design", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/backgrounds", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/2d-animations", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/illustrations", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
