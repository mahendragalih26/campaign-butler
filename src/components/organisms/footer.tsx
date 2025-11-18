const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Campaign Butler
            </h3>
            <p className="text-gray-400">
              Win Your Next Election with Campaign Butler&apos;s All-in-One
              Solution
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/campaignbutler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/campaignbutler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/campaignbutler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/campaignbutler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@campaignbutler.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@campaignbutler.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Campaign Butler. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
