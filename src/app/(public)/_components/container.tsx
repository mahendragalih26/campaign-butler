"use client"

import Header from "@/components/moleculs/header"
import HeroSection from "@/app/(public)/_components/landing/hero-section"
import FeatureShowcase from "@/app/(public)/_components/landing/feature-showcase"
import WhyChoose from "@/app/(public)/_components/landing/why-choose"
import Testimonial from "@/app/(public)/_components/landing/testimonial"
import Experience from "@/app/(public)/_components/landing/experience"
import ServingCampaigns from "@/app/(public)/_components/landing/serving-campaigns"
import ServicePackages from "@/app/(public)/_components/landing/service-packages"
import ContactForm from "@/app/(public)/_components/landing/contact-form"
import VisibilitySection from "@/app/(public)/_components/landing/visibility-section"
import Footer from "@/app/(public)/_components/landing/footer"

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
      <Footer />
    </div>
  )
}

export default Container
