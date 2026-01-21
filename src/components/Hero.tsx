'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadlineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(headlineRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.2,
            })
                .from(subheadlineRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                }, '-=0.6')
                .from(ctaRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                }, '-=0.6');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[85vh] flex flex-col justify-center px-6 container mx-auto">
            <div className="max-w-4xl">
                <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight">
                    Video Editing That Helps Creators <span className="text-primary">Grow Faster.</span>
                </h1>

                <p ref={subheadlineRef} className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
                    Short-form edits, motion graphics, and YouTube systems — built for consistency and retention.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" href="/work">
                        View My Work
                    </Button>
                    <Button size="lg" variant="secondary" href="/contact">
                        Contact Me
                    </Button>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>
    );
}
