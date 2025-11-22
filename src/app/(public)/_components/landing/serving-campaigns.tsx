"use client"

import { Icon } from "@iconify/react"

const ServingCampaigns = () => {
  const services = [
    {
      title: "All 50 States",
      icon: "mdi:map",
      description: "Compliant solutions for campaigns anywhere in America",
    },
    {
      title: "Every Race",
      icon: "mdi:run",
      description: "From city council to congressional campaigns",
    },
    {
      title: "Specialized",
      icon: "mdi:target",
      description:
        "Expertise in school board, judicial, and other specialized races",
    },
    {
      title: "Partisan & Non-Partisan",
      icon: "mdi:account-group",
      description: "Solutions for every type of campaign",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Serving Campaigns Nationwide
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors gap-2"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center mb-2 min-w-16 min-h-16">
                  <Icon
                    icon={service.icon}
                    className="w-10 h-10 text-red-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-md col-span-2 px-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServingCampaigns
