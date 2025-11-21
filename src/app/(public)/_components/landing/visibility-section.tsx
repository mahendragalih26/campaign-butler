"use client"

const VisibilitySection = () => {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          className="absolute top-0 right-0"
        >
          <path
            d="M 200,200 Q 250,150 300,200 T 400,200"
            stroke="#dc2626"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M 200,200 Q 150,250 200,300 T 200,400"
            stroke="#dc2626"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-2xl overflow-hidden">
                {/* Placeholder for woman photo */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-48 h-32 bg-white rounded-lg"></div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-600 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Visibility Starts Here.
              <br />
              <span className="text-red-600">Victory Follows.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With Campaign Butler, you get more than just tools—you get a
              partner dedicated to your success. Our comprehensive platform and
              expert team help you connect with voters, mobilize supporters, and
              win elections.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisibilitySection
