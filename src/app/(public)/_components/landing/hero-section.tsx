"use client"

import { Button } from "@/components/atoms/button"
import Divider from "@/components/atoms/divider"
import { Icon } from "@iconify/react"

const HeroSection = () => {
  return (
    <section
      className="pt-32 pb-20 px-6  min-h-[100vh]"
      style={{
        backgroundColor: "hsla(0,0%,0%,1)",
        backgroundImage:
          "radial-gradient(at 90% 64%, hsla(240,60%,22%,1) 100px, transparent 50%);",
      }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Win Your Next Election with Campaign Butler&apos;s <br />{" "}
              All-in-One Solution
            </h1>
            <p className="text-md text-gray-300 leading-relaxed">
              From digital presence to boots on the ground, we deliver the
              tools, technology, and expertise that modern campaigns need to
              connect with voters and secure victory.
            </p>
            <div className="flex items-center gap-2">
              <span>Find Your Domain </span>
              <div className="w-auto px-3 justify-between py-3 bg-gray-800/50  rounded-lg outline-none">
                <input
                  type="text"
                  name="domain"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  className=" outline-none"
                  placeholder="Type Here.."
                />
                <span className="flex-end">| .vote</span>
              </div>
              <Button variant="outline" className="font-bold">
                Search{" "}
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="w-6 h-6 text-red-600"
                />
              </Button>
            </div>
          </div>

          {/* Right Illustration - Network Graphic */}
          <div className="relative md:block hidden">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Abstract network graphic */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-between w-full">
          <Button variant={"default"} className="">
            Launch your Campaign today
            <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
          </Button>
          <Divider
            orientation="horizontal"
            thickness="thin"
            color="white"
            className="flex-1"
          />
          <div>
            <Button variant={"ghost"} className="">
              See Our Pricing
              <Icon
                icon="solar:arrow-right-up-linear"
                className="w-5 h-5 text-red-600"
              />
            </Button>
            |
            <Button variant={"ghost"} className="">
              Schedule a Demo
              <Icon
                icon="solar:arrow-right-up-linear"
                className="w-5 h-5 text-red-600"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
