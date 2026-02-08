"use client"

import { useEffect, useState, useRef } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "reveal">("loading")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 12 + 3
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setPhase("reveal")
          setTimeout(onComplete, 800)
        }, 400)
      }
      setProgress(Math.min(current, 100))
    }, 80)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ${phase === "reveal"
          ? "opacity-0 scale-105"
          : "opacity-100 scale-100"
        }`}
      style={{ backgroundColor: "#111111" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
        }}
      />

      {/* Brand name */}
      <div className="relative mb-12">
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter font-mono"
          style={{ color: "#f2f2f2" }}
        >
          <span style={{ color: "#8B5CF6" }}>{"IKR"}</span>
          <span className="opacity-30">{"."}</span>
        </h1>
      </div>

      {/* Progress bar */}
      <div className="relative w-64 md:w-80">
        <div
          className="h-[2px] w-full rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(139,92,246,0.15)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-200 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #8B5CF6, #A3E635)",
            }}
          />
        </div>

        {/* Progress text */}
        <div className="flex items-center justify-between mt-4">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "rgba(139,92,246,0.6)" }}
          >
            Initializing
          </span>
          <span
            className="text-xs font-mono tabular-nums"
            style={{ color: "#8B5CF6" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
        <span
          className="text-[10px] font-mono tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Creator-Engineer Portfolio
        </span>
      </div>
    </div>
  )
}
