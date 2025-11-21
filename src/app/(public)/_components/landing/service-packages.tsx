"use client"

import { Icon } from "@iconify/react"

const ServicePackages = () => {
  const packages = [
    {
      title: "A La Carte Services",
      icon: "mdi:account",
      description:
        "Choose specific services tailored to your campaign needs. Perfect for campaigns with targeted requirements.",
      buttonText: "Learn More",
    },
    {
      title: "Full Suite Package",
      icon: "mdi:account-group",
      description:
        "Comprehensive solution with all tools and services included. Ideal for campaigns seeking complete support.",
      buttonText: "Learn More",
    },
    {
      title: "Custom Solutions",
      icon: "mdi:cog",
      description:
        "Tailored packages designed specifically for your unique campaign strategy and objectives.",
      buttonText: "Learn More",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 transition-colors shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Icon icon={pkg.icon} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {pkg.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {pkg.description}
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePackages
