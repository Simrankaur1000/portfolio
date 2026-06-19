'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

function Particles() {
  const [seeds, setSeeds] = useState<
    { left: number; top: number; size: number; delay: number; dur: number }[]
  >([])

  useEffect(() => {
    const arr = Array.from({ length: 36 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 5,
      dur: Math.random() * 6 + 6,
    }))
    setSeeds(arr)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -40, 0] }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 250}px, ${
          e.clientY - 250
        }px)`
      }
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full opacity-50 blur-[120px] will-change-transform"
      style={{
        background:
          'radial-gradient(circle, color-mix(in oklch, var(--primary) 35%, transparent), transparent 65%)',
      }}
    />
  )
}

export function CyberBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      {/* base gradient depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, oklch(0.22 0.05 262) 0%, var(--background) 55%)',
        }}
      />
      {/* moving cyber grid */}
      <motion.div
        className="cyber-grid absolute inset-x-0 -top-1/4 h-[150%]"
        animate={{ backgroundPositionY: ['0px', '48px'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(100% 100% at 50% 50%, transparent 40%, var(--background) 100%)',
        }}
      />
      <Particles />
      <CursorGlow />
    </div>
  )
}
