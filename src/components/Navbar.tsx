"use client"

import { useEffect, useState, useRef } from "react"

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-3 backdrop-blur-md bg-black/50 border-b border-white/10"
        : "py-5 bg-transparent"
        }`}
      style={{
        // Using Tailwind classes for background/border, but keeping this overrides if needed or removing inline styles to rely on classes
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="relative group"
          data-cursor-hover
        >
          <span className="text-xl font-bold font-mono tracking-tight" style={{ color: "#f2f2f2" }}>
            <span style={{ color: "#8B5CF6" }}>IKR</span>
            <span className="opacity-30">.</span>
          </span>
          <span
            className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
            style={{ background: "linear-gradient(90deg, #8B5CF6, #A3E635)" }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="relative py-1 text-sm font-mono tracking-wider uppercase transition-colors duration-300"
              style={{
                color: activeSection === link.href.replace("#", "")
                  ? "#8B5CF6"
                  : "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#8B5CF6"
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color =
                  activeSection === link.href.replace("#", "")
                    ? "#8B5CF6"
                    : "rgba(255,255,255,0.5)"
              }}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <span
                  className="absolute -bottom-1 left-0 h-[2px] w-full"
                  style={{ backgroundColor: "#8B5CF6" }}
                />
              )}
            </a>
          ))}
          <a
            href="/contact"
            data-cursor-hover
            className="px-5 py-2 text-sm font-mono font-semibold tracking-wider uppercase rounded transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#A3E635",
              color: "#111111",
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-cursor-hover
        >
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: "#8B5CF6",
              transform: mobileOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: "#8B5CF6",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: "#8B5CF6",
              transform: mobileOpen ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ backgroundColor: "rgba(17,17,17,0.95)" }}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-mono tracking-wider uppercase py-2 transition-colors duration-300"
              style={{
                color: activeSection === link.href.replace("#", "")
                  ? "#8B5CF6"
                  : "rgba(255,255,255,0.6)",
                borderBottom: "1px solid rgba(139,92,246,0.1)",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 text-center text-sm font-mono font-semibold tracking-wider uppercase rounded transition-all duration-300"
            style={{ backgroundColor: "#A3E635", color: "#111111" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
