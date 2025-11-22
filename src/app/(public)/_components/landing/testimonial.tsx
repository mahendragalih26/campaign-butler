"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import DotsIndicator from "@/components/atoms/dots-indicator"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Richard Trumpet",
      role: "County Coordinator",
      quote:
        "The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.",
      percentage: "40%",
    },
    {
      name: "Sarah Johnson",
      role: "Campaign Manager",
      quote:
        "Campaign Butler helped us streamline our operations and reach voters more effectively than ever before.",
      percentage: "35%",
    },
    {
      name: "Michael Chen",
      role: "State Director",
      quote:
        "The all-in-one platform saved us countless hours and significantly improved our campaign efficiency.",
      percentage: "50%",
    },
  ]

  const partners = ["Planned Parenthood", "1C CS", "NARAL", "Partners"]

  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom, white 50%, #0a0a0a 50%)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Profile Images */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all ${
                  index === currentIndex ? "scale-110" : "scale-100 opacity-60"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[index].name.charAt(0)}
                </div>
                {index === currentIndex && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center relative">
            <div className="absolute top-4 left-4 text-red-600 text-6xl font-serif">
              <span>&quot;</span>
            </div>
            <div className="absolute bottom-4 right-4 text-red-600 text-6xl font-serif">
              <span>&quot;</span>
            </div>

            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-800 mb-6 italic">
                {testimonials[currentIndex].quote}
              </p>

              {/* Percentage Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full mb-4">
                <span className="text-3xl font-bold">
                  {testimonials[currentIndex].percentage}
                </span>
                <span className="text-sm">increase</span>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
              )
            }
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
              )
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <DotsIndicator
                key={index}
                index={index}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Partner Logos */}
      <div className="mt-16 flex items-center justify-center gap-8 flex-wrap z-10">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-100 rounded-lg text-gray-600 font-medium text-sm"
          >
            {partner}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
