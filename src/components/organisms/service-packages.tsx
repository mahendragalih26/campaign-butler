import NextImage from "@/components/atoms/next-image"

const ServicePackages = () => {
  return (
    <section className="bg-white overflow-hidden pb-20">
      <div className="container mx-auto">
        <NextImage
          src="/assets/landing/Asset 10.png"
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

export default ServicePackages
