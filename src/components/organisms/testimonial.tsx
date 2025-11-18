import NextImage from "@/components/atoms/next-image"

const Testimonial = () => {
  return (
    <section className="bg-white overflow-hidden pt-25">
      <div className="w-[calc(100vw+8rem)] -ml-[4rem] -mr-[4rem]">
        <NextImage
          src="/assets/landing/Asset 7.png"
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

export default Testimonial
