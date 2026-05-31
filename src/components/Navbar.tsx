"use client"

import { useEffect, useState, useRef } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const navRef = useRef<HTMLElement>(null)

  const { contextSafe } = useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, { scope: navRef });

  const handleLinkMouseEnter = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      color: '#A3E635',
      duration: 0.15,
      ease: 'power2.out'
    });
  });

  const handleLinkMouseLeave = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      color: '',
      duration: 0.15,
      ease: 'power2.out',
      clearProps: 'color'
    });
  });

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 backdrop-blur-md bg-background/90 border-b border-border shadow-glow"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="relative group flex items-center"
          data-cursor-hover
        >
          <span className="text-xl font-bold font-mono tracking-tight text-foreground">
            <span className="text-primary">IKR</span>
            <span className="text-text-secondary">.</span>
          </span>
          <span
            className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-primary"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              onMouseEnter={handleLinkMouseEnter}
              onMouseLeave={handleLinkMouseLeave}
              className={`relative py-1 text-sm font-mono tracking-wider uppercase transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-text-secondary"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-primary" />
              )}
            </a>
          ))}
          <a
            href="/contact"
            data-cursor-hover
            className="px-6 py-2 text-sm font-mono font-bold tracking-wider uppercase rounded-sm transition-all duration-300 bg-secondary text-background hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-cursor-hover
        >
          {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={handleLinkMouseEnter}
              onMouseLeave={handleLinkMouseLeave}
              className={`text-lg font-mono tracking-wider uppercase py-2 transition-colors duration-300 border-b border-border ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-text-secondary"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-3 text-center text-sm font-mono font-bold tracking-wider uppercase rounded-sm transition-all duration-300 bg-secondary text-background"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

