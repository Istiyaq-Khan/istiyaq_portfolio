"use client"

import { useEffect, useState, useRef, useCallback } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const position = useRef({ x: 0, y: 0 })
  const smoothPosition = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const animate = useCallback(() => {
    smoothPosition.current.x +=
      (position.current.x - smoothPosition.current.x) * 0.15
    smoothPosition.current.y +=
      (position.current.y - smoothPosition.current.y) * 0.15

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${smoothPosition.current.x - 16}px, ${smoothPosition.current.y - 16}px)`
    }
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${position.current.x - 3}px, ${position.current.y - 3}px)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    rafRef.current = requestAnimationFrame(animate)

    // Detect hoverable elements
    const handleElementHover = () => {
      const hoverableSelectors = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      
      document.addEventListener("mouseover", (e) => {
        const target = e.target as HTMLElement
        if (target.closest(hoverableSelectors)) {
          setIsHovering(true)
        }
      })

      document.addEventListener("mouseout", (e) => {
        const target = e.target as HTMLElement
        if (target.closest(hoverableSelectors)) {
          setIsHovering(false)
        }
      })
    }
    handleElementHover()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", checkMobile)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animate, isVisible, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "#A3E635" : "rgba(139,92,246,0.7)"}`,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s",
          ...(isHovering && {
            width: 48,
            height: 48,
            transform: `translate(${smoothPosition.current.x - 24}px, ${smoothPosition.current.y - 24}px)`,
          }),
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: isHovering ? "#A3E635" : "#8B5CF6",
          opacity: isVisible ? 1 : 0,
          transition: "background-color 0.3s, opacity 0.3s",
        }}
      />
    </>
  )
}
