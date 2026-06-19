'use client'

import { motion } from 'motion/react'
import { Award, CheckCircle2, Clock, CircleDashed } from 'lucide-react'
import { certifications, type CertStatus } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const statusMap: Record<
  CertStatus,
  { icon: typeof CheckCircle2; cls: string; dot: string }
> = {
  Completed: {
    icon: CheckCircle2,
    cls: 'border-neon-green/40 text-neon-green bg-neon-green/10',
    dot: 'bg-neon-green',
  },
  'In Progress': {
    icon: Clock,
    cls: 'border-accent/40 text-accent bg-accent/10',
    dot: 'bg-accent',
  },
  Planned: {
    icon: CircleDashed,
    cls: 'border-purple/40 text-purple bg-purple/10',
    dot: 'bg-purple',
  },
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        index="03 / CERTIFICATIONS"
        title="Credentials & roadmap."
        subtitle="Industry certifications earned and in pursuit — a transparent view of where I am and where I'm headed."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => {
          const s =
            statusMap[c.status as CertStatus]
          const Icon = s.icon
          return (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/50 transition-colors group-hover:border-primary/40">
                  <Award className="h-6 w-6 text-primary" />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium ${s.cls}`}
                >
                  <Icon className="h-3 w-3" />
                  {c.status}
                </span>
              </div>
                            

              {c.preview && (
                <div className="mb-5 overflow-hidden rounded-xl border border-border">
                  <img
                    src={c.preview}
                    alt={c.name}
                    className="
                      h-44
                      w-full
                      object-cover
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>
              )}


              <h3 className="font-heading text-xl font-bold">{c.name}</h3>
              <p className="font-mono text-xs text-accent">{c.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.blurb}
              </p>

              {(c.preview || c.download) && (
                <div className="mt-5 flex gap-3">

                  {c.preview && (
                    <a
                      href={c.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-lg
                        border
                        border-primary/30
                        px-4
                        py-2
                        text-xs
                        transition
                        hover:bg-primary/10
                      "
                    >
                      Preview
                    </a>
                  )}

                  {c.download && (
                    <a
                      href={c.download}
                      download
                      className="
                        rounded-lg
                        border
                        border-accent/30
                        px-4
                        py-2
                        text-xs
                        transition
                        hover:bg-accent/10
                      "
                    >
                      Download
                    </a>
                  )}

                </div>
              )}

            </motion.article>
          )
        })}
      </div>
    </section>
  )
}