"use client"

import NextImage from "@/components/atoms/next-image"

const FeatureShowcase = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto ">
        <NextImage
          src="/assets/landing/Asset 5.png"
          // unoptimized
          alt="Feature Showcase"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default FeatureShowcase
