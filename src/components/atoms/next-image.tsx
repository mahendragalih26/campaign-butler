"use client"

import { cn } from "@/utils/classname"
import Image from "next/image"
import { ComponentProps, useState } from "react"

const NextImage = (props: ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true)

  // Check if the image is SVG or GIF format
  const isSvg =
    typeof props.src === "string" && props.src.toLowerCase().endsWith(".svg")
  const isGif =
    typeof props.src === "string" && props.src.toLowerCase().endsWith(".gif")
  const isWebp =
    typeof props.src === "string" && props.src.toLowerCase().endsWith(".webp")
  const shouldUnoptimize = isSvg || isGif || isWebp

  return (
    <Image
      {...props}
      src={props.src}
      alt={props.alt || ""}
      unoptimized={props?.unoptimized || shouldUnoptimize}
      className={cn(
        props.className,
        "duration-700 ease-in-out",
        isLoading ? "scale-101 blur-xs" : "blur-0 scale-100"
      )}
      onLoad={() => setLoading(false)}
    />
  )
}

export default NextImage
