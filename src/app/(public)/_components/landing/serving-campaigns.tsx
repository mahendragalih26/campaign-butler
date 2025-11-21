"use client"

import { Icon } from "@iconify/react"

const ServingCampaigns = () => {
  const services = [
    {
      title: "All 50 States",
      icon: "mdi:map",
      description: "Nationwide coverage for campaigns across the United States",
    },
    {
      title: "Every Race",
      icon: "mdi:run",
      description:
        "From local elections to federal positions, we support all levels",
    },
    {
      title: "Specialized",
      icon: "mdi:target",
      description: "Tailored solutions for your specific campaign needs",
    },
    {
      title: "Partisan & Non-Partisan",
      icon: "mdi:account-group",
      description:
        "Serving candidates and organizations across the political spectrum",
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
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServingCampaigns
