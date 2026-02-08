"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Project {
    _id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    thumbnailUrl: string;
    tools: string[];
    featured: boolean;
}

export function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    // Fetch featured projects from API
    useEffect(() => {
        async function fetchFeaturedProjects() {
            try {
                console.log('Fetching featured projects...')
                const response = await fetch('/api/projects?featured=true')
                console.log('Response status:', response.status)
                if (response.ok) {
                    const data = await response.json()
                    console.log('Featured projects data:', data)
                    console.log('Projects array:', data.projects)
                    console.log('Projects length:', data.projects?.length)
                    setProjects(data.projects || [])
                } else {
                    console.error('Failed to fetch featured projects, status:', response.status)
                }
            } catch (error) {
                console.error('Failed to fetch featured projects:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFeaturedProjects()
    }, [])

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

    // Don't show section if no featured projects after loading completes
    if (!loading && projects.length === 0) {
        console.log('No featured projects - hiding section')
        return null
    }

    // Map colors for visual variety
    const colors = ["#8B5CF6", "#A3E635", "#8B5CF6"]

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 bg-black"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header - Always visible */}
                <div className="mb-16">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-violet-400 block mb-4">
                        Featured Work
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Systems I've{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-lime-400 bg-clip-text text-transparent">
                            Designed & Built
                        </span>
                    </h2>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-white/70">Loading featured projects...</span>
                        </div>
                    </div>
                )}

                {/* Projects list */}
                {!loading && projects.length > 0 && (
                    <div className="space-y-8">
                        {projects.map((project, i) => (
                            <Link
                                key={project._id}
                                href={`/work/${project.slug}`}
                                className="block group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-violet-400/30 transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-800">
                                        {project.thumbnailUrl && (
                                            <Image
                                                src={project.thumbnailUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                        )}
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-violet-400/50 rounded text-xs font-mono text-violet-400">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center gap-4">
                                        <div>
                                            <span className="text-xs font-mono tracking-widest uppercase text-violet-400">
                                                {project.category}
                                            </span>
                                            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div
                                            className="text-sm md:text-base leading-relaxed text-white/60 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: project.description }}
                                        />

                                        {/* Tags */}
                                        {project.tools && project.tools.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.tools.slice(0, 4).map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="px-3 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white/70"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* CTA */}
                                        <div className="mt-2">
                                            <span className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-violet-400 group-hover:gap-3 transition-all">
                                                View Details
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
