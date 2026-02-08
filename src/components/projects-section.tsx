"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const projects = [
    {
        title: "AI Content Pipeline",
        subtitle: "Automated Workflow System",
        description:
            "End-to-end automation pipeline that repurposes long-form YouTube content into optimized short-form clips, social media posts, and email sequences — all powered by AI.",
        tags: ["Python", "n8n", "Generative AI", "Automation"],
        image: "/images/project-ai-workflow.jpg",
        color: "#8B5CF6",
        index: "01",
    },
    {
        title: "Content Distribution Engine",
        subtitle: "Multi-Platform System",
        description:
            "A system architecture that takes a single content piece and automatically formats, optimizes, and schedules it across multiple platforms with platform-specific adjustments.",
        tags: ["Content SEO", "API Integration", "Scheduling", "Analytics"],
        image: "/images/project-content-system.jpg",
        color: "#A3E635",
        index: "02",
    },
    {
        title: "Motion & Brand Design",
        subtitle: "Visual Identity Systems",
        description:
            "Premium motion graphics, branding packages, and visual identity systems designed for creators and tech brands — combining cinematic quality with brand strategy.",
        tags: ["After Effects", "Motion Graphics", "Branding", "Photoshop"],
        image: "/images/project-motion-design.jpg",
        color: "#8B5CF6",
        index: "03",
    },
]

export function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.05 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: "#0d0d0d" }}
        >
            {/* Background accent */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.03] blur-[120px]"
                style={{ background: "#8B5CF6" }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div
                    className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#8B5CF6" }}>
                        Featured Work
                    </span>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "#f2f2f2" }}>
                        Systems I{"'ve"}{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #8B5CF6, #A3E635)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Designed & Built
                        </span>
                    </h2>
                </div>

                {/* Projects list */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({
    project,
    index,
    isVisible,
}: {
    project: (typeof projects)[number]
    index: number
    isVisible: boolean
}) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8 rounded-xl transition-all duration-500"
            style={{
                backgroundColor: hovered ? `${project.color}06` : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? `${project.color}30` : "rgba(139,92,246,0.08)"}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${index * 150}ms`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div
                className="relative h-56 md:h-72 rounded-lg overflow-hidden"
                style={{
                    order: index % 2 === 0 ? 0 : 1,
                }}
            >
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, ${project.color}20, transparent 60%)`,
                        opacity: hovered ? 1 : 0.5,
                    }}
                />
                {/* Index badge */}
                <div
                    className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-mono font-bold"
                    style={{
                        backgroundColor: "rgba(17,17,17,0.8)",
                        color: project.color,
                        border: `1px solid ${project.color}40`,
                        backdropFilter: "blur(8px)",
                    }}
                >
                    {project.index}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center gap-4" style={{ order: index % 2 === 0 ? 1 : 0 }}>
                <div>
                    <span
                        className="text-xs font-mono tracking-widest uppercase"
                        style={{ color: project.color }}
                    >
                        {project.subtitle}
                    </span>
                    <h3
                        className="mt-2 text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ color: "#f2f2f2" }}
                    >
                        {project.title}
                    </h3>
                </div>

                <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                >
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded text-xs font-mono"
                            style={{
                                backgroundColor: `${project.color}0A`,
                                border: `1px solid ${project.color}20`,
                                color: "rgba(255,255,255,0.5)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-2">
                    <span
                        data-cursor-hover
                        className="inline-flex items-center gap-2 text-sm font-mono font-semibold tracking-wider transition-all duration-300 group-hover:gap-3"
                        style={{ color: project.color }}
                    >
                        View Details
                        <span className="transition-transform duration-300 group-hover:translate-x-1">{"-->"}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
