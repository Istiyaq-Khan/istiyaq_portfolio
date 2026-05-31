import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <span className="text-sm font-mono tracking-tight text-text-secondary">
            <span className="text-primary font-bold">IKR</span>
            <span className="opacity-30">.</span>
            <span className="ml-2 text-xs">Istiyaq Khan Razin</span>
          </span>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-mono text-text-secondary">
            <Link href="/about" className="hover:text-primary transition-colors duration-300">About</Link>
            <Link href="/services" className="hover:text-primary transition-colors duration-300">Services</Link>
            <Link href="/work" className="hover:text-primary transition-colors duration-300">Work</Link>
            <Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
          </nav>

          {/* Copyright */}
          <span className="text-xs font-mono text-text-secondary/70">
            &copy; {new Date().getFullYear()} IKK Studio. All rights reserved.
          </span>

          {/* Built with */}
          <span className="text-xs font-mono text-text-secondary/70">
            Built with{" "}
            <span className="text-primary font-medium">passion</span> &{" "}
            <span className="text-secondary font-medium">automation</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
