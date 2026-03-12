import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="relative py-8 overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(139,92,246,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-sm font-mono tracking-tight" style={{ color: "rgba(255,255,255,0.3)" }}>
            <span style={{ color: "#8B5CF6" }}>IKR</span>
            <span className="opacity-30">.</span>
            <span className="ml-2 text-xs">Istiyaq Khan Razin</span>
          </span>

          {/* Navigation */}
          <nav className="flex items-center gap-4 text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/work" className="hover:text-primary transition-colors">Work</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* Copyright */}
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; {new Date().getFullYear()} IKK Studio. All rights reserved.
          </span>

          {/* Built with */}
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            Built with{" "}
            <span style={{ color: "#8B5CF6" }}>passion</span> &{" "}
            <span style={{ color: "#A3E635" }}>automation</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
