"use client"

import { Icon } from "@iconify/react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col gap-2">
            <div className="flex">
              <span className="text-white text-xl font-semibold">Campaign</span>
              <span className="text-red-600 text-xl font-semibold">Butler</span>
            </div>
            <div className="text-gray-400 text-sm max-w-xs">
              Win Your Next Election with Campaign Butler's All-in-One Solution
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 items-center gap-x-30 gap-y-4 flex-wrap justify-center">
            <a
              href="#privacy-policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacv Policy
            </a>
            <a
              href="#support-center"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support Center
            </a>
            <a
              href="#terms-and-conditions"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#campaign-resources"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Campaign Resources
            </a>
            <a
              href="#support-center"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-red-600 items-center hover:bg-red-700 text-white p-3 rounded-md transition-colors shadow-lg w-12 h-12 cursor-pointer"
            aria-label="Scroll to top"
          >
            <Icon icon="mdi:chevron-up" className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t border-white/10 mt-8   pt-8">
          {/* Copyright */}
          <div className=" text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Campaign Butler. All rights
              reserved.
            </p>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 justify-end ">
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
      </div>
    </footer>
  )
}

export default Footer
