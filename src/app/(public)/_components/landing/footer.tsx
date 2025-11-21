"use client"

import { Icon } from "@iconify/react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-red-600"></div>
            <div className="flex">
              <span className="text-white text-xl font-semibold">Campaign</span>
              <span className="text-red-600 text-xl font-semibold">Butler</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/campaignbutler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Icon icon="mdi:facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/campaignbutler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Icon icon="mdi:twitter" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/campaignbutler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Icon icon="mdi:instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/campaignbutler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Campaign Butler. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors shadow-lg"
        aria-label="Scroll to top"
      >
        <Icon icon="mdi:chevron-up" className="w-6 h-6" />
      </button>
    </footer>
  )
}

export default Footer
