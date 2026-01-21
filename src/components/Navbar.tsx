'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for class merging (inline to avoid import issues if utils not set up yet, though I set up dirs)
// Actually I can use the same utility logic or just keeping it simple.
// I'll assume I can just use clsx/twMerge directly here or duplicate the simple `cn`.
// I will duplicate `cn` for safety in this snippet or assumes it's available.
// I'll duplicate to be safe as I didn't create `src/lib/utils.ts`.

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled || isOpen
                    ? 'bg-background/80 backdrop-blur-md border-b border-border'
                    : 'bg-transparent border-transparent'
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-tight hover:text-primary transition-colors">
                    Istiyaq<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                pathname === link.href ? 'text-primary' : 'text-foreground/80'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" href="/contact">
                        Let's Talk
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-lg font-medium transition-colors hover:text-primary',
                                pathname === link.href ? 'text-primary' : 'text-foreground/80'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="lg" href="/contact" className="w-full">
                        Let's Talk
                    </Button>
                </div>
            )}
        </nav>
    );
}
