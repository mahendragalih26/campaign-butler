import NextImage from "@/components/atoms/next-image"

const Experience = () => {
  return (
    <section className="bg-white overflow-hidden py-25">
      <div className="container mx-auto">
        <NextImage
          src="/assets/landing/Asset 8.png"
          // unoptimized
          alt="Feature Showcase"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default Experience
