"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import { Button } from "@/components/atoms/button"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    last_name: "",
    "terms-of-service": false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const benefits = [
    "<span class='font-bold text-lg'>Same-day</span> Domain and email setup",
    "<span class='font-bold text-lg'>Professional</span> website within 72 hours",
    "<span class='font-bold text-lg'>Dedicated</span> campaign strategist",
    "<span class='font-bold text-lg'>Complete</span> onboarding and training",
  ]

  return (
    <section className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Launch Your{" "}
              <span className="text-red-600">Winning Campaign</span>
            </h2>
            <p className="text-lg text-white">
              Get started today with Campaign Butler and receive:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: benefit }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-transparent rounded-lg p-8 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="First Name"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                  placeholder="Phone Number (Optional)"
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="checkbox"
                  id="terms-of-service"
                  name="terms-of-service"
                  value={formData["terms-of-service"].toString()}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white"
                />
                <label htmlFor="terms-of-service">
                  I agree to receive text messages from Campaign Butler. By
                  checking this box and providing your phone number,{" "}
                  <a href="/terms-of-service" className="text-red-600">
                    Read more...
                  </a>
                </label>
              </div>

              <Button variant={"default"} size="lg" className="">
                Launch My Campaign
                <Icon icon="solar:arrow-right-up-linear" className="w-8 h-8" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
