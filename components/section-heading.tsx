'use client'

import { motion } from 'motion/react'

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span className="text-glow-cyan">{index}</span>
        <span className="h-px w-12 bg-accent/50" />
      </div>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}
