"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "2025", label: "Founded IKK Studio" },
  { value: "AI+", label: "Workflow Systems" },
  { value: "10+", label: "Tools Mastered" },
  { value: "100%", label: "Automation Focus" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Subtle side glow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-[500px] opacity-[0.04] blur-[100px]"
        style={{ background: "#8B5CF6" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "#8B5CF6" }}
          >
            About Me
          </span>
          <h2
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#f2f2f2" }}
          >
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #A3E635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creator-Engineer
            </span>{" "}
            Behind IKK Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - About text */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p
              className={`text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {"I'm"} <span style={{ color: "#f2f2f2" }} className="font-semibold">Istiyaq Khan Razin</span>, a
              Sylhet-based professional operating at the intersection of creative media and technical automation.
              As the Founder of <span style={{ color: "#8B5CF6" }} className="font-semibold">IKK Studio</span>,
              I specialize in designing AI-powered workflow systems that transform how creators produce and
              distribute content.
            </p>

            <p
              className={`text-base md:text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              My work bridges two worlds — hard technical automation using Python, n8n, and Generative AI,
              combined with creative design expertise in Adobe Photoshop, After Effects, and Motion Graphics.
              I {"don't"} just edit videos; I build the systems that edit them.
            </p>

            <p
              className={`text-base md:text-lg leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              I solve efficiency problems for YouTubers, solopreneurs, and small businesses — designing automated
              pipelines that repurpose long-form content into short-form clips, generate social media posts,
              and manage email automations, so creators can focus on their craft.
            </p>

            {/* Highlight bar */}
            <div
              className={`mt-4 p-5 rounded-lg transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{
                backgroundColor: "rgba(139,92,246,0.06)",
                border: "1px solid rgba(139,92,246,0.15)",
              }}
            >
              <p className="text-sm font-mono leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: "#A3E635" }}>{"// "}</span>
                Currently expanding expertise in{" "}
                <span style={{ color: "#8B5CF6" }}>Prompt Engineering</span> and{" "}
                <span style={{ color: "#8B5CF6" }}>Marketing Automation</span>, scaling
                from individual execution to system architecture.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-5 rounded-lg transition-all duration-700 hover:scale-[1.02]`}
                style={{
                  backgroundColor: "rgba(139,92,246,0.04)",
                  border: "1px solid rgba(139,92,246,0.1)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(20px)",
                  transitionDelay: `${i * 100 + 200}ms`,
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold font-mono"
                  style={{ color: "#8B5CF6" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-sm font-mono tracking-wider"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Experience timeline snippet */}
            <div
              className={`mt-4 p-5 rounded-lg transition-all duration-700 delay-[600ms] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                }`}
              style={{
                backgroundColor: "rgba(163,230,53,0.04)",
                border: "1px solid rgba(163,230,53,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#A3E635" }}
                />
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#A3E635" }}>
                  Current Role
                </span>
              </div>
              <div className="text-sm font-semibold" style={{ color: "#f2f2f2" }}>
                Founder, IKK Studio
              </div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                AI Workflow & Content Systems
              </div>
              <div className="text-xs mt-0.5 font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
                Dec 2025 - Present
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
