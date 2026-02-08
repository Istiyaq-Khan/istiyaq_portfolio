"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "AI & Automation",
    icon: "{ }",
    color: "#8B5CF6",
    skills: [
      "Python",
      "n8n Workflows",
      "Generative AI",
      "Prompt Engineering",
      "Content Pipelines",
      "Email Automation",
    ],
  },
  {
    title: "Creative Design",
    icon: "[ ]",
    color: "#A3E635",
    skills: [
      "Adobe Photoshop",
      "After Effects",
      "Motion Graphics",
      "Branding",
      "Visual Design",
      "Typography",
    ],
  },
  {
    title: "Content & Growth",
    icon: "< >",
    color: "#8B5CF6",
    skills: [
      "YouTube Management",
      "Content SEO",
      "Content Repurposing",
      "Social Media Strategy",
      "Marketing Automation",
      "Analytics",
    ],
  },
  {
    title: "Technical Stack",
    icon: "/ /",
    color: "#A3E635",
    skills: [
      "Workflow Architecture",
      "API Integration",
      "System Design",
      "Process Automation",
      "Data Pipelines",
      "Cloud Tools",
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] blur-[100px]"
        style={{ background: "#A3E635" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "#8B5CF6" }}
          >
            Skills & Systems
          </span>
          <h2
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#f2f2f2" }}
          >
            What I{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #A3E635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build & Master
            </span>
          </h2>
          <p
            className="mt-4 text-base md:text-lg max-w-2xl"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A hybrid skill set bridging creative excellence with technical automation —
            designed to build systems that scale.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="group relative p-6 md:p-8 rounded-xl transition-all duration-500 hover:scale-[1.01]"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(139,92,246,0.1)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${catIndex * 120}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${category.color}40`
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = `${category.color}08`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.1)"
                  ; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)"
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-lg font-mono font-bold"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </span>
                <h3
                  className="text-lg font-bold tracking-tight"
                  style={{ color: "#f2f2f2" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-300"
                    style={{
                      backgroundColor: `${category.color}0A`,
                      border: `1px solid ${category.color}20`,
                      color: "rgba(255,255,255,0.6)",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.8)",
                      transitionDelay: `${catIndex * 120 + skillIndex * 50}ms`,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = `${category.color}20`
                        ; (e.target as HTMLElement).style.borderColor = `${category.color}50`
                        ; (e.target as HTMLElement).style.color = category.color
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = `${category.color}0A`
                        ; (e.target as HTMLElement).style.borderColor = `${category.color}20`
                        ; (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${category.color}06, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom workflow visualization */}
        <div
          className={`mt-16 p-6 md:p-8 rounded-xl transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{
            backgroundColor: "rgba(139,92,246,0.04)",
            border: "1px solid rgba(139,92,246,0.1)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#8B5CF6" }}>
              How It All Connects
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {["Content Input", "AI Processing", "Automated Pipeline", "Multi-Platform Output"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-3 md:gap-4">
                  <span
                    className="px-4 py-2 rounded-lg text-xs md:text-sm font-mono whitespace-nowrap"
                    style={{
                      backgroundColor: i % 2 === 0 ? "rgba(139,92,246,0.12)" : "rgba(163,230,53,0.12)",
                      border: `1px solid ${i % 2 === 0 ? "rgba(139,92,246,0.25)" : "rgba(163,230,53,0.25)"}`,
                      color: i % 2 === 0 ? "#8B5CF6" : "#A3E635",
                    }}
                  >
                    {step}
                  </span>
                  {i < 3 && (
                    <span className="text-lg" style={{ color: "rgba(139,92,246,0.3)" }}>
                      {"->"}
                    </span>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
