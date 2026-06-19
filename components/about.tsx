'use client'

import { motion } from 'motion/react'
import { GraduationCap, Target } from 'lucide-react'
import { education } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        index="01 / ABOUT"
        title="Cyber Security Researcher & Aspiring Penetration Tester"
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-pretty leading-relaxed text-muted-foreground"
        >
          <p>
            I am passionate about understanding how systems can be compromised and how organizations can defend against those threats. My primary interests include penetration testing, web application security, digital forensics, and network security.
            Through academic research and hands-on practice, I continue to expand my knowledge of offensive security methodologies, forensic investigations, and modern enterprise environments.
          </p>
          <div className="rounded-xl border border-border bg-card p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Target className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Career Objective
              </span>
            </div>
            <p className="text-sm text-foreground/90">
              To secure a Cyber Security, VAPT, or Penetration Testing role where I can contribute to vulnerability assessment activities, improve my offensive security expertise, and continue progressing toward advanced certifications such as PNPT and OSCP.
            </p>
          </div>
        </motion.div>

        {/* education timeline */}
        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-accent/50 to-transparent" />
          <ul className="space-y-8">
            {education.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs text-accent">
                  {e.period}
                </span>
                <h3 className="mt-1 flex items-center gap-2 font-heading text-lg font-semibold">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  {e.title}
                </h3>
                <p className="text-sm font-medium text-foreground/80">{e.org}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {e.detail}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
