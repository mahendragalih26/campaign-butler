"use client"

import { Icon } from "@iconify/react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
          <span className="text-white text-xl font-semibold">Campaign</span>
          <span className="text-red-600 text-xl font-semibold">Butler</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-white hover:text-red-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-red-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#support"
            className="text-white hover:text-red-500 transition-colors"
          >
            Support
          </a>
          <a
            href="#blog"
            className="text-white hover:text-red-500 transition-colors"
          >
            Blog
          </a>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <Icon icon="mdi:menu" className="w-6 h-6" />
        </button>
      </nav>
    </header>
  )
}

export default Header
