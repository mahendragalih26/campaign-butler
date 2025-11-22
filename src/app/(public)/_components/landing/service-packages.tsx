"use client"

import { cn } from "@/utils/classname"
import { Icon } from "@iconify/react"

const ServicePackages = () => {
  const packages = [
    {
      title: "A La Carte Services",
      icon: "mdi:account",
      description:
        "Build your custom campaign toolkit Starting at <span class='font-bold text-red-600'>$99/month</span>",
      buttonText: "See Options",
      className: "text-gray-900",
    },
    {
      title: "Full Suite Package",
      icon: "mdi:account-group",
      description:
        "Everything you need to launch and run a professional campaign <span class='font-bold text-red-600'>$500/month</span>",
      buttonText: "Learn More",
      className: "bg-black color-white",
    },
    {
      title: "Custom Solutions",
      icon: "mdi:cog",
      description:
        "Tailored packages designed specifically for your unique campaign strategy and objectives.",
      buttonText: "Learn More",
      className: "text-gray-900",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Campaigns Solution for Every Budget
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 transition-colors shadow-lg",
                pkg.className
              )}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Icon icon={pkg.icon} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold  mb-4 text-inherit">
                {pkg.title}
              </h3>
              <p
                className=" mb-6 leading-relaxed text-inherit min-h-[100px]"
                dangerouslySetInnerHTML={{ __html: pkg.description }}
              />

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
