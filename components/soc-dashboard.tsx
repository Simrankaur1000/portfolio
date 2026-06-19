'use client'

import { motion } from 'motion/react'
import { Activity, Globe2, ShieldAlert, Wifi } from 'lucide-react'

const nodes = [
  { x: 130, y: 40, c: 'var(--cyan)' },
  { x: 50, y: 110, c: 'var(--primary)' },
  { x: 210, y: 100, c: 'var(--purple)' },
  { x: 110, y: 160, c: 'var(--primary)' },
  { x: 230, y: 180, c: 'var(--cyan)' },
  { x: 60, y: 200, c: 'var(--neon-green)' },
]
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [2, 4],
]

function MiniBars() {
  const heights = [40, 65, 30, 80, 55, 70, 45, 90, 35, 60]
  return (
    <div className="flex h-16 items-end gap-1">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-sm bg-primary/70"
          initial={{ height: 0 }}
          animate={{ height: [`${h}%`, `${(h + 25) % 100}%`, `${h}%`] }}
          transition={{
            duration: 2.4,
            delay: i * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

import Image from 'next/image'

export function SocDashboard() {
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden rounded-3xl border border-primary/20 shadow-2xl">
        <Image
          src="/images/img.jpeg"
          alt="Simran Kaur"
          width={450}
          height={550}
          priority
          className="object-cover"
        />
      </div>
    </div>
  )
}

