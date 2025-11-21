"use client"

const FeatureShowcase = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-15">
          {/* Dashboard Illustration */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">U</span>
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    <div className="h-2 w-16 bg-gray-200 rounded mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-2 gap-4">
                {/* Bar Chart */}
                <div className="bg-white rounded-lg p-4">
                  <div className="h-2 w-16 bg-gray-200 rounded mb-3"></div>
                  <div className="flex items-end gap-2 h-24">
                    <div
                      className="flex-1 bg-red-600 rounded-t"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="flex-1 bg-red-500 rounded-t"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="flex-1 bg-red-400 rounded-t"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="flex-1 bg-red-300 rounded-t"
                      style={{ height: "90%" }}
                    ></div>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-8 border-red-600"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-red-400 border-t-transparent transform rotate-45"></div>
                  </div>
                </div>
              </div>

              {/* Data Points */}
              <div className="grid grid-cols-3 gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-3">
                    <div className="h-2 w-12 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-8 bg-red-600 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Description */}
          <div className="bg-white rounded-lg p-8 ">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold text-black">
                The Campaign Challange
              </h2>
              <p className="text-gray-600">
                From digital presence to boots on the ground, we deliver the
                tools, technology, and expertise that modern campaigns need to
                connect with voters and secure victory.
              </p>
            </div>
          </div>

          {/* Browser Interface Desc*/}
          <div className="bg-white rounded-lg p-8 ">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold text-black">
                The Campaign Butler Solution
              </h2>
              <p className="text-gray-600">
                we've created the first truly integrated campaign platform that
                handles everything from your domain name to your communication
                gaps. reduces costs, and dramatically increases your campaign's
                effectiveness.
              </p>
            </div>
          </div>

          {/* Browser Interface Illustration */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              {/* Browser Header */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 h-6 bg-gray-200 rounded ml-4"></div>
              </div>

              {/* Content Area */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                {/* Image Placeholder */}
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Image</div>
                </div>

                {/* VOTE Button */}
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
                  VOTE
                </button>

                {/* Text Editing Tools */}
                <div className="flex items-center gap-2 border-t pt-4">
                  <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1">
                    <span className="text-xs font-semibold">Aa</span>
                    <div className="h-3 w-px bg-gray-300 mx-1"></div>
                    <span className="text-xs">12</span>
                  </div>
                  <div className="flex-1 h-8 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
