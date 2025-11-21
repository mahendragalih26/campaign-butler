"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    "Same-day response",
    "Complete transparency",
    "Expert consultation",
    "Customized solutions",
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Launch Your Winning Campaign?
            </h2>
            <p className="text-lg text-gray-600">
              Connect with Campaign Butler today and discover how we can help
              you achieve victory.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:check" className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                  placeholder="Tell us about your campaign needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Submit to Campaign Butler
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
