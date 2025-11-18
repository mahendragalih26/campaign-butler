"use client"

import NextImage from "../atoms/next-image"

const HeroSection = () => {
  // return (
  //   <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] min-h-[calc(100vh)]">
  //     <div className="container mx-auto">
  //       <div className="grid md:grid-cols-2 gap-12 items-center">
  //         {/* Left Content */}
  //         <div className="space-y-6">
  //           <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
  //             Win Your Next Election with Campaign Butler&apos;s All-in-One
  //             Solution
  //           </h1>
  //           <p className="text-lg text-gray-300 leading-relaxed">
  //             From digital presence to boots on the ground, we deliver the
  //             tools, technology, and expertise that modern campaigns need to
  //             connect with voters and secure victory.
  //           </p>
  //           <div>
  //             <div className="flex items-center gap-2 flex-wrap">
  //               <div className="md:block hidden text-white text-sm font-medium">
  //                 Find Your Domain
  //               </div>
  //               <div className="flex-1 min-w-[200px]">
  //                 <input
  //                   type="text"
  //                   placeholder="Enter your domain"
  //                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
  //                 />
  //               </div>
  //               <div>
  //                 <button className="bg-transparent border border-white/20 flex items-center gap-2 hover:bg-red-600 hover:border-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
  //                   Search
  //                   <Icon icon="mdi:arrow-right" className="w-4 h-4" />
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-8 py-2 rounded-lg text-lg font-semibold transition-colors">
  //             <span>Lunch your campaign today!</span>
  //             <Icon icon="mdi:arrow-right" className="w-4 h-4 text-white" />
  //           </button>
  //         </div>

  //         {/* Right Illustration */}
  //         <div className="relative md:block hidden">
  //           <div className="bg-[#16213e] rounded-lg p-8 h-[400px] flex items-center justify-center">
  //             <div className="grid grid-cols-3 gap-4 w-full">
  //               {[...Array(9)].map((_, i) => (
  //                 <div
  //                   key={i}
  //                   className="bg-white/10 rounded-lg p-4 flex flex-col items-center gap-2"
  //                 >
  //                   <div className="w-12 h-12 bg-white/20 rounded-full"></div>
  //                   <div className="w-full h-2 bg-white/10 rounded"></div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )

  return (
    <section className="bg-white overflow-hidden">
      <div className="w-[calc(100vw+8rem)] -ml-[4rem] -mr-[4rem] -mt-[5rem]">
        <NextImage
          src="/assets/landing/Asset 4.png"
          // unoptimized
          alt="Feature Showcase"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default HeroSection
