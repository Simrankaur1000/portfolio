'use client'

import { motion } from 'motion/react'
import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading
        index="06 / EXPERIENCE"
        title="The journey so far."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-primary via-accent/40 to-transparent md:left-1/2" />
        <ul className="space-y-10">
          {experience.map((e, i) => {
            const left = i % 2 === 0
            return (
              <motion.li
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  left ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                <span
                  className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background left-0 ${
                    left ? 'md:-right-4 md:left-auto' : 'md:-left-4'
                  }`}
                >
                  <Briefcase className="h-4 w-4 text-primary" />
                </span>
                <div className="rounded-xl border border-border bg-card p-5 backdrop-blur transition-colors hover:border-primary/40">
                  <span className="font-mono text-xs text-accent">
                    {e.period}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold">
                    {e.role}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80">
                    {e.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {e.detail}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
