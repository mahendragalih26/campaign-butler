"use client"

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Chess Piece Graphic */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Chessboard background */}
              <div className="grid grid-cols-8 gap-0 w-full aspect-square bg-gray-800 p-4 rounded-lg">
                {[...Array(64)].map((_, i) => {
                  const row = Math.floor(i / 8)
                  const col = i % 8
                  const isLight = (row + col) % 2 === 0
                  return (
                    <div
                      key={i}
                      className={`${isLight ? "bg-gray-600" : "bg-gray-900"}`}
                    ></div>
                  )
                })}
              </div>

              {/* Chess Queen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Queen piece */}
                  <div className="w-16 h-20 bg-white rounded-lg shadow-xl flex flex-col items-center justify-end pb-2">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Network lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: -1 }}
                  >
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 360) / 8
                      const radius = 100
                      const x = 200 + radius * Math.cos((angle * Math.PI) / 180)
                      const y = 200 + radius * Math.sin((angle * Math.PI) / 180)
                      return (
                        <line
                          key={i}
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="#dc2626"
                          strokeWidth="2"
                          className="opacity-30"
                        />
                      )
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Winning Campaigns Choose Campaign Butler
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Unified Strategy, Maximum Impact
                  </h3>
                  <p className="text-gray-600">
                    Integrate all your campaign tools in one powerful platform
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Built for Political Success
                  </h3>
                  <p className="text-gray-600">
                    Designed specifically for the unique needs of political
                    campaigns
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Scale to Your Race
                  </h3>
                  <p className="text-gray-600">
                    From local elections to national campaigns, we scale with
                    you
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
