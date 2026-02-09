"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const FRAME_COUNT = 25
const DURATION = 2.5 // seconds
const IMAGES_BASE_PATH = "/match/optimized/razin-ai-identity-matchcut-"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const imagesRef = useRef<HTMLImageElement[]>([])

  // Track animation state
  const frameIndex = useRef({ value: 0 })

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = []
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image()
        const indexStr = i.toString().padStart(2, "0")
        img.src = `${IMAGES_BASE_PATH}${indexStr}.webp`

        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            setImagesLoaded((prev) => prev + 1)
            resolve()
          }
          img.onerror = () => {
            console.error(`Failed to load image ${i}`)
            // Resolve anyway to avoid blocking
            resolve()
          }
        })

        imagesRef.current[i - 1] = img
        promises.push(promise)
      }

      await Promise.all(promises)
    }

    loadImages()
  }, [])

  // Animation logic
  useEffect(() => {
    if (imagesLoaded < FRAME_COUNT) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    // Helper to draw image cover
    const renderFrame = (index: number) => {
      const img = imagesRef.current[index]
      if (!img) return

      // Clear canvas
      ctx.fillStyle = "#111111" // Matte black
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Calculate "cover" dimensions
      const canvasRatio = canvas.width / canvas.height
      const imgRatio = img.width / img.height

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height
        drawWidth = img.width * (canvas.height / img.height)
        offsetX = (canvas.width - drawWidth) / 2
        offsetY = 0
      } else {
        drawWidth = canvas.width
        drawHeight = img.height * (canvas.width / img.width)
        offsetX = 0
        offsetY = (canvas.height - drawHeight) / 2
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }

    // Set canvas dimensions to window size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Draw current frame immediately after resize
      renderFrame(Math.floor(frameIndex.current.value))
    }

    window.addEventListener("resize", updateSize)
    updateSize()

    // GSAP Animation
    const ctx_gsap = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: onComplete
          })
        }
      })

      tl.to(frameIndex.current, {
        value: FRAME_COUNT - 1,
        duration: DURATION,
        ease: "none", // Linear for consistent frame rate
        onUpdate: () => {
          renderFrame(Math.floor(frameIndex.current.value))
        }
      })
    })

    return () => {
      window.removeEventListener("resize", updateSize)
      ctx_gsap.revert()
    }
  }, [imagesLoaded, onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]"
    >
      {/* Loading progress (hidden when animation starts, or kept subtle) */}
      {imagesLoaded < FRAME_COUNT && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-100 transition-all duration-300 ease-out"
              style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
            />
          </div>
          <p className="absolute mt-8 text-neutral-500 font-mono text-xs tracking-widest">
            INITIALIZING SYSTEM...
          </p>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block touch-none"
        style={{ opacity: imagesLoaded === FRAME_COUNT ? 1 : 0 }}
      />

      {/* Optional Brand Overlay - Fades in/out or stays */}
      <div className={`absolute bottom-10 left-10 z-10 transition-opacity duration-500 ${imagesLoaded === FRAME_COUNT ? "opacity-50" : "opacity-0"}`}>
        <p className="text-white/20 font-mono textxs tracking-[0.2em] uppercase">
          Identity Calibration
        </p>
      </div>
    </div>
  )
}

