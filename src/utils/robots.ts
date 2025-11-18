import { headers } from "next/headers"

/**
 * Generates dynamic robots meta content based on the current environment
 * @returns robots meta content string
 */
export async function generateRobotsContent(): Promise<string> {
  try {
    const headersList = await headers()
    const host = headersList.get("host") || ""

    // Check if current environment is staging or localhost
    const isStagingOrLocalhost =
      host.includes("staging") ||
      host.includes("localhost") ||
      host.includes("127.0.0.1") ||
      host.includes("0.0.0.0")

    // Return appropriate robots content
    if (isStagingOrLocalhost) {
      return "noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    } else {
      return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }
  } catch (error) {
    console.log("generate robot error = ", error)
    // Fallback to production robots content if headers() fails
    return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  }
}

/**
 * Generates dynamic robots meta content for specific pages
 * @param shouldIndex - Whether the page should be indexed (default: true)
 * @returns robots meta content string
 */
export async function generatePageRobotsContent(
  shouldIndex: boolean = true
): Promise<string> {
  try {
    const headersList = await headers()
    const host = headersList.get("host") || ""

    // Check if current environment is staging or localhost
    const isStagingOrLocalhost =
      host.includes("staging") ||
      host.includes("localhost") ||
      host.includes("127.0.0.1") ||
      host.includes("0.0.0.0")

    // If staging/localhost, always noindex
    if (isStagingOrLocalhost) {
      return "noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }

    // For production, use the shouldIndex parameter
    if (shouldIndex) {
      return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    } else {
      return "noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }
  } catch (error) {
    console.log("generate robot error = ", error)
    // Fallback to production robots content if headers() fails
    if (shouldIndex) {
      return "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    } else {
      return "noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }
  }
}
