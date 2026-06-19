'use client'

import { motion } from 'motion/react'
import { Download, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  'MSc Advanced Networking & Cyber Security',
  'Building practical skills through labs and projects',
  'Hands-on cybersecurity practice through CTF challenges',
  'Interested in VAPT, SOC and Cyber Defense',
]

const resumePath = '/resume/CV.pdf'

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        index="07 / RESUME"
        title="Recruiter-ready."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: 0.6,
        }}
        className="grid items-center gap-8 rounded-2xl border border-border bg-card p-6 backdrop-blur md:grid-cols-2 md:p-10"
      >

        {/* LEFT CONTENT */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-balance">
            Everything in one document.
          </h3>

          <p className="mt-3 leading-relaxed text-muted-foreground">
            ATS-friendly resume showcasing education,
            projects, practical labs, technical skills,
            and cybersecurity learning journey.
          </p>

          <ul className="mt-5 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-foreground/85"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-3">

            {/* DOWNLOAD */}
            <a
              href={resumePath}
              download="Simran_Kaur_Resume.pdf"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                hover:scale-[1.03]
                hover:glow-primary
              "
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>

            {/* PREVIEW */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-border
                bg-background/50
                px-5
                py-3
                text-sm
                font-semibold
                transition-all
                hover:border-accent/50
                hover:text-accent
              "
            >
              <Eye className="h-4 w-4" />
              Preview
            </a>

          </div>
        </div>

        {/* RIGHT SIDE — ACTUAL RESUME */}
        <div className="relative">

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              glass
              mx-auto
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-background/60
              shadow-2xl
              glow-cyan
            "
          >

            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0`}
              title="Resume Preview"
              className="
                h-[650px]
                w-full
                rounded-2xl
              "
            />

          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}