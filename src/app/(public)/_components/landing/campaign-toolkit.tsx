"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import DotsIndicator from "@/components/atoms/dots-indicator"

const CampaignToolkit = () => {
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
    <section className="py-20 bg-white text-black">
      <div className="rounded-tl-[20%] rounded-tr-3xl px-6">
        <div className="container mx-auto">
          <div className="mb-10 mx-auto flex justify-between">
            <h2 className="text-4xl md:text-5xl font-bold ">
              Your Complete <br /> Campaign Toolkit
            </h2>

            <div className="flex gap-2 max-h-10">
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
                className="relative bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Icon
                  icon="mdi:chevron-left"
                  className="w-6 h-6 text-gray-800"
                />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
                className="relative right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Icon
                  icon="mdi:chevron-right"
                  className="w-6 h-6 text-gray-800"
                />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 ">
            {/* Left */}
            <div className="relative items-center justify-center">
              <h3 className="text-3xl font-bold mb-4">Digital Presence</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:alt-arrow-right-bold"
                    className="min-w-[40px] w-8 h-8 text-red-600"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold  mb-1">
                      Unified Strategy, Maximum Impact
                    </h3>
                    <p className="">
                      Stop juggling multiple vendors. Our integrated platform
                      ensure your message stays consistent across every voter
                      touchpoint-saving you time, money, and headaches
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:alt-arrow-right-bold"
                    className="min-w-[40px] w-8 h-8 text-red-600"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 mb-1">
                      Built for Political Success
                    </h3>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon
                    icon="solar:alt-arrow-right-bold"
                    className="min-w-[40px] w-8 h-8 text-red-600"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 mb-1">
                      Scale to Your Race
                    </h3>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right  */}
            <div className="flex items-center justify-center">image</div>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-6">
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
      </div>
    </section>
  )
}

export default CampaignToolkit
