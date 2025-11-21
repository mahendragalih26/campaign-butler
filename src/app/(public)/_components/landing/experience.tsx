"use client"

import { Icon } from "@iconify/react"

const Experience = () => {
  const services = ["Voter Outreach", "Ground Game", "Campaign Operations"]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Services List & Device Illustration */}
          <div className="space-y-8">
            {/* Device Illustration */}
            <div className="flex items-center gap-4">
              {/* Phone */}
              <div className="relative">
                <div className="w-32 h-56 bg-gray-800 rounded-2xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 bg-red-600 rounded-lg"></div>
                    <div className="w-20 h-2 bg-gray-200 rounded"></div>
                    <div className="w-16 h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Laptop */}
              <div className="relative">
                <div className="w-48 h-32 bg-gray-800 rounded-lg p-1 shadow-xl">
                  <div className="w-full h-full bg-white rounded flex flex-col items-center justify-center gap-2">
                    <div className="w-16 h-10 bg-red-600 rounded"></div>
                    <div className="w-32 h-1 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-2 bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-900">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-red-600">
              30+ Years of Campaign Victory Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team brings decades of combined experience in political
              campaigns, voter engagement, and campaign management. We
              understand what it takes to win elections at every level.
            </p>

            {/* Success Icons Graphic */}
            <div className="relative mt-8">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon
                      icon="mdi:check-circle"
                      className="w-8 h-8 text-red-600"
                    />
                  </div>
                  <span className="text-sm text-gray-600">Success</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon
                      icon="mdi:thumb-up"
                      className="w-8 h-8 text-red-600"
                    />
                  </div>
                  <span className="text-sm text-gray-600">Approval</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:star" className="w-8 h-8 text-red-600" />
                  </div>
                  <span className="text-sm text-gray-600">Excellence</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:message" className="w-8 h-8 text-red-600" />
                  </div>
                  <span className="text-sm text-gray-600">Engagement</span>
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
