"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

export default function Button({
    className,
    variant = 'primary',
    size = 'md',
    href,
    children,
    ...props
}: ButtonProps) {
    const buttonRef = useRef<any>(null);
    const { contextSafe } = useGSAP({ scope: buttonRef });

    const handleMouseEnter = contextSafe(() => {
        if (variant === 'primary') {
            gsap.to(buttonRef.current, {
                filter: 'brightness(1.15)',
                duration: 0.15,
                ease: 'power2.out',
            });
            gsap.to('svg', {
                x: 3,
                duration: 0.15,
                ease: 'power2.out',
            });
        }
    });

    const handleMouseLeave = contextSafe(() => {
        if (variant === 'primary') {
            gsap.to(buttonRef.current, {
                filter: 'brightness(1)',
                duration: 0.15,
                ease: 'power2.out',
                clearProps: 'filter',
            });
            gsap.to('svg', {
                x: 0,
                duration: 0.15,
                ease: 'power2.out',
                clearProps: 'x',
            });
        }
    });

    const variants = {
        primary: 'bg-cta text-black font-bold shadow-[0_0_15px_rgba(163,230,53,0.3)] border border-transparent', // Acid Green
        secondary: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20', // Purple Tint
        outline: 'border border-border text-foreground hover:border-primary hover:text-primary bg-transparent',
        ghost: 'text-foreground/70 hover:text-primary hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const baseStyles = 'inline-flex items-center justify-center rounded-md font-mono font-medium tracking-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none';

    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={styles} passHref>
                <span ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline-flex w-full h-full items-center justify-center gap-2">
                    {children}
                </span>
            </Link>
        );
    }

    return (
        <button ref={buttonRef} className={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
            <span className="inline-flex items-center justify-center gap-2 pointer-events-none">
                {children}
            </span>
        </button>
    );
}
