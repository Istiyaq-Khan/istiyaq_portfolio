import Link from 'next/link';
import { Github, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-12 mt-auto">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand / Copyright */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-serif font-bold mb-2">Istiyaq.</h2>
                        <p className="text-sm text-foreground/60">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {/* Add actual links later */}
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="YouTube">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="mailto:hello@istiyaq.com" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
