"use client"

import { useEffect, useRef, useState } from "react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Istiyaq-Khan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/istiyaq-khan/" },
  { label: "X / Twitter", href: "https://x.com/istiyaqkhanr" },
  { label: "YouTube", href: "https://www.youtube.com/@istiyaq-khan10" },
  { label: "Instagram", href: "https://www.instagram.com/ist.iyaqkhan/" },
  { label: "Devpost", href: "https://devpost.com/Istiyaq-Khan" },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.04] blur-[150px]"
        style={{ background: "#8B5CF6" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#8B5CF6" }}>
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance" style={{ color: "#f2f2f2" }}>
            {"Let's Build Something"}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #A3E635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Extraordinary
            </span>
          </h2>
          <p
            className="mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Looking for AI-powered content systems, automated workflows, or premium creative design?
            I{"'m"} ready to help scale your brand.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="mailto:istiyaqkhan@example.com"
            data-cursor-hover
            className="group relative px-8 py-4 font-mono text-sm font-semibold tracking-wider uppercase rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#A3E635", color: "#111111" }}
          >
            <span className="relative z-10">Start a Project</span>
          </a>
          <a
            href="https://www.linkedin.com/in/istiyaq-khan/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="px-8 py-4 font-mono text-sm font-semibold tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(139,92,246,0.4)",
              color: "#8B5CF6",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#8B5CF6"
                ; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(139,92,246,0.1)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.4)"
                ; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
            }}
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Find Me Online
          </span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(139,92,246,0.15)",
                  color: "rgba(255,255,255,0.5)",
                  backgroundColor: "rgba(139,92,246,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "#8B5CF6"
                  el.style.color = "#8B5CF6"
                  el.style.backgroundColor = "rgba(139,92,246,0.1)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = "rgba(139,92,246,0.15)"
                  el.style.color = "rgba(255,255,255,0.5)"
                  el.style.backgroundColor = "rgba(139,92,246,0.04)"
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
