import Container from "./_components/container"
import type { Metadata } from "next"
import { generatePageRobotsContent } from "@/utils/robots"
export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const robotsContent = await generatePageRobotsContent(true)

  return {
    title: "Campaign Butler - All in One Campaign Management Solution",
    description:
      "Campaign Butler is a all in one campaign management solution for your business.",
    keywords:
      "campaign management, campaign management solution, campaign management software, campaign management tool, campaign management platform, campaign management system, campaign management service, campaign management provider, campaign management provider",
    applicationName: "Campaign Butler",
    robots: robotsContent,
    openGraph: {
      title: "Campaign Butler - All in One Campaign Management Solution",
      description:
        "Campaign Butler is a all in one campaign management solution for your business.",
      url: "https://campaignbutler.vercel.app/",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/og.png", // Replace with actual image URL
          alt: "Campaign Butler - All in One Campaign Management Solution",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "Campaign Butler",
    },
    twitter: {
      card: "summary_large_image",
      title: "Campaign Butler - All in One Campaign Management Solution",
      description:
        "Campaign Butler is a all in one campaign management solution for your business.",
      images: ["/og.png"], // Replace with actual image URL
      creator: "@campaignbutler",
      site: "https://campaignbutler.vercel.app/",
    },
    alternates: {
      canonical: "/",
    },
  }
}

export default function Home() {
  return <Container />
}
