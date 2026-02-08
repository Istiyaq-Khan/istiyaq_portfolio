"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Istiyaq-Khan", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/istiyaq-khan/", icon: "LI" },
  { label: "X", href: "https://x.com/istiyaqkhanr", icon: "X" },
  { label: "YouTube", href: "https://www.youtube.com/@istiyaq-khan10", icon: "YT" },
  { label: "Instagram", href: "https://www.instagram.com/ist.iyaqkhan/", icon: "IG" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }

    const section = sectionRef.current
    section?.addEventListener("mousemove", handleMouseMove)
    return () => section?.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating glow orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: "#8B5CF6",
          top: "10%",
          right: "10%",
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: "#A3E635",
          bottom: "20%",
          left: "5%",
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Tag */}
            <div
              className={`inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
              style={{
                border: "1px solid rgba(139,92,246,0.3)",
                color: "#8B5CF6",
                backgroundColor: "rgba(139,92,246,0.05)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#A3E635" }}
              />
              Available for Projects
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-balance transition-all duration-700 delay-100 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ color: "#f2f2f2" }}
            >
              I Build{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #A3E635)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Systems
              </span>
              <br />
              That Create{" "}
              <span className="relative inline-block">
                Content
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 C 50 2, 150 2, 198 8"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-base md:text-lg leading-relaxed max-w-lg transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Founder of{" "}
              <span style={{ color: "#8B5CF6" }} className="font-semibold">
                IKK Studio
              </span>
              . I design automated AI workflows and content pipelines that help creators
              scale their output while focusing on what matters — the craft.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              <a
                href="#projects"
                data-cursor-hover
                className="group relative px-7 py-3.5 font-mono text-sm font-semibold tracking-wider uppercase rounded overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#8B5CF6", color: "#fff" }}
              >
                <span className="relative z-10">View Work</span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                  }}
                />
              </a>
              <a
                href="#contact"
                data-cursor-hover
                className="px-7 py-3.5 font-mono text-sm font-semibold tracking-wider uppercase rounded transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(139,92,246,0.4)",
                  color: "#8B5CF6",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#8B5CF6"
                    ; (e.target as HTMLElement).style.backgroundColor = "rgba(139,92,246,0.1)"
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "rgba(139,92,246,0.4)"
                    ; (e.target as HTMLElement).style.backgroundColor = "transparent"
                }}
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center gap-3 mt-4 transition-all duration-700 delay-[400ms] ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-xs font-mono font-bold transition-all duration-300 hover:scale-110"
                  style={{
                    border: "1px solid rgba(139,92,246,0.2)",
                    color: "rgba(255,255,255,0.5)",
                    backgroundColor: "rgba(139,92,246,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = "#8B5CF6"
                    el.style.color = "#8B5CF6"
                    el.style.backgroundColor = "rgba(139,92,246,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.borderColor = "rgba(139,92,246,0.2)"
                    el.style.color = "rgba(255,255,255,0.5)"
                    el.style.backgroundColor = "rgba(139,92,246,0.05)"
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
              }`}
          >
            {/* Decorative frame */}
            <div className="relative">
              {/* Purple glow behind image */}
              <div
                className="absolute -inset-4 rounded-2xl opacity-30 blur-2xl"
                style={{ background: "#8B5CF6" }}
              />

              {/* Main image container */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid rgba(139,92,246,0.3)",
                  transform: `perspective(1000px) rotateX(${mousePos.y * -0.1}deg) rotateY(${mousePos.x * 0.1}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <Image
                  src="/Istiyaq-Khan-Razin.png"
                  alt="Istiyaq Khan Razin - AI Workflow Engineer & Creator"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                  title="Istiyaq Khan Razin - Founder of IKK Studio"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,92,246,0.1), transparent 50%, rgba(163,230,53,0.05))",
                  }}
                />
              </div>

              {/* Corner accents */}
              <div
                className="absolute -top-2 -left-2 w-6 h-6"
                style={{
                  borderTop: "2px solid #8B5CF6",
                  borderLeft: "2px solid #8B5CF6",
                }}
              />
              <div
                className="absolute -bottom-2 -right-2 w-6 h-6"
                style={{
                  borderBottom: "2px solid #A3E635",
                  borderRight: "2px solid #A3E635",
                }}
              />

              {/* Status badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase whitespace-nowrap"
                style={{
                  backgroundColor: "rgba(17,17,17,0.9)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span style={{ color: "#A3E635" }}>{"< "}</span>
                Creator-Engineer
                <span style={{ color: "#A3E635" }}>{" />"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-[500ms] ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <span
          className="text-[10px] font-mono tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-8 relative overflow-hidden"
          style={{ backgroundColor: "rgba(139,92,246,0.2)" }}
        >
          <div
            className="absolute top-0 left-0 w-full animate-pulse"
            style={{
              height: "50%",
              background: "linear-gradient(180deg, #8B5CF6, transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(-100%); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
