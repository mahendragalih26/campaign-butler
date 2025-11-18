"use client"

import Header from "@/components/organisms/header"
import HeroSection from "@/components/organisms/hero-section"
import FeatureShowcase from "@/components/organisms/feature-showcase"
import WhyChoose from "@/components/organisms/why-choose"
import Testimonial from "@/components/organisms/testimonial"
import Experience from "@/components/organisms/experience"
import ServingCampaigns from "@/components/organisms/serving-campaigns"
import ServicePackages from "@/components/organisms/service-packages"
import ContactForm from "@/components/organisms/contact-form"
import VisibilitySection from "@/components/organisms/visibility-section"

const Container = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <HeroSection />
      <FeatureShowcase />
      <WhyChoose />
      <Testimonial />
      <Experience />
      <ServingCampaigns />
      <ServicePackages />
      <ContactForm />
      <VisibilitySection />
    </div>
  )
}

export default Container
