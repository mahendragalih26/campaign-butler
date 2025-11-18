import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://campaign-butler-galihm.vercel.app"
  const currentDate = new Date()

  // Main sitemap with static routes and creator sitemap reference
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: "daily",
    //   priority: 0.9,
    // },
  ]
}
