"use client"

import React, { useRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export default function Card({
    className,
    children,
    hoverEffect = false,
    ...props
}: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: cardRef });

    const handleMouseEnter = contextSafe(() => {
        if (!hoverEffect) return;
        gsap.to(cardRef.current, {
            y: -4,
            boxShadow: '0px 0px 15px rgba(139, 92, 246, 0.15)',
            duration: 0.2,
            ease: 'power2.out',
        });
    });

    const handleMouseLeave = contextSafe(() => {
        if (!hoverEffect) return;
        gsap.to(cardRef.current, {
            y: 0,
            boxShadow: '0px 0px 0px rgba(139, 92, 246, 0)',
            duration: 0.2,
            ease: 'power2.out',
            clearProps: 'boxShadow',
        });
    });

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                'rounded-xl border border-border bg-card-bg p-6 text-foreground shadow-sm transition-colors duration-300',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
