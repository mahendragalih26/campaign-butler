"use client"

import { Icon } from "@iconify/react"

const Experience = () => {
  const services = ["Voter Outreach", "Ground Game", "Campaign Operations"]

  return (
    <section className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Services List & Device Illustration */}
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-red-600">30+</span> Years of Campaign
              Victory Experience
            </h2>
            <p className="text-md text-white leading-relaxed">
              <span className="font-bold text-red-500">Campaign Butler</span>{" "}
              combines decades of political expertise with cutting-edge
              marketing technology. We've helped candidates at every level-from
              school board to statewide office-connect with voters and win
              elections. Our team understands that exposure wins elections, but
              only when it's strategic, consistent, and targeted. That's why
              we've built the only truly integrated campaign marketing platform
              that unites traditional outreach with digital essentials.
            </p>

            {/* Success Icons Graphic */}
          </div>

          {/* Right - Content */}
          <div className="space-y-10 flex items-center justify-center">
            <div className="relative mt-8">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon
                      icon="mdi:check-circle"
                      className="w-8 h-8 text-red-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon
                      icon="mdi:thumb-up"
                      className="w-8 h-8 text-red-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:star" className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:message" className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Swirling pattern background */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M 100,100 Q 120,80 140,100 T 180,100"
                    stroke="#dc2626"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M 100,100 Q 80,120 100,140 T 100,180"
                    stroke="#dc2626"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
