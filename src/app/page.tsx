"use client"
import type { Metadata } from "next"

import { useState, useCallback } from "react"
import { LoadingScreen } from "../components/loading-screen"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { SkillsSection } from "../components/skills-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/Footer"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Istiyaq Khan Razin",
  alternateName: ["Istiyaq Khan", "IKK"],
  jobTitle: "AI Workflow Engineer & Founder",
  description: "A Sylhet-based professional positioning himself at the intersection of creative media and technical automation. Founder of IKK Studio, specializing in AI workflow systems for content creators.",
  image: "https://istiyaq.com/Istiyaq-Khan-Razin.png",
  url: "https://istiyaq.com",
  sameAs: [
    "https://github.com/Istiyaq-Khan",
    "https://www.linkedin.com/in/istiyaq-khan",
    "https://x.com/istiyaqkhanr",
    "https://www.youtube.com/@istiyaq-khan10",
    "https://www.instagram.com/ist.iyaqkhan",
    "https://blog.istiyaq.com",
    "https://devpost.com/Istiyaq-Khan"
  ],
  worksFor: {
    "@type": "Organization",
    name: "IKK Studio",
  },
  knowsAbout: [
    "Video Editing",
    "Motion Graphics",
    "Python Programming",
    "n8n Automation",
    "Generative AI",
    "YouTube Growth"
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Scholars Home, Sylhet"
  },
  email: "hello@istiyaq.com"
};

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div
        className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
