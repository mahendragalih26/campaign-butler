"use client"

import NextImage from "../atoms/next-image"

const ContactForm = () => {
  return (
    <section className="bg-white overflow-hidden pb-20">
      <div className="w-[calc(100vw+8rem)] -ml-[4rem] -mr-[4rem]">
        <NextImage
          src="/assets/landing/Asset 11.png"
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

export default ContactForm
