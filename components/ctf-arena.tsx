'use client'

import { Trophy, ExternalLink, Shield } from 'lucide-react'
import { ctf } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { CtfAwards } from './ctf-awards'
import { SiteNav } from '@/components/site-nav'

export function CTFArena() {
  const [showAwards, setShowAwards] = useState(false)
  return (
    <section
      id="ctf"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <SectionHeading
        index="05 / CTF"
        title="Competitive Cybersecurity"
      />
      <div className="glass glow-primary mt-10 rounded-3xl p-8">
      <AnimatePresence mode="wait">

  {!showAwards ? (

    <motion.div
      key="ctf-main"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8 flex items-center gap-3">
        <Trophy className="h-7 w-7 text-primary" />

        <div>
          <h3 className="text-2xl font-bold">
            {ctf.teamName}
          </h3>

          <p className="text-muted-foreground">
            {ctf.role}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            {ctf.description}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {ctf.focusAreas.map((area) => (
          <div
            key={area}
            className="flex items-center gap-3 rounded-xl border border-primary/20 bg-card/60 p-4"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span>{area}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={ctf.ctftime}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground"
        >
          View CTFTime Profile
          <ExternalLink className="h-4 w-4" />
        </a>

        <button
          onClick={() => setShowAwards(true)}
          className="rounded-xl border border-primary/30 px-5 py-3 font-semibold hover:bg-primary/10"
        >
          CTF Awards
        </button>

        <Link
          href="/certificates/"
          className="rounded-xl border border-primary/30 px-5 py-3 font-semibold hover:bg-primary/10"
        >
          CTF Certificates
        </Link>
      </div>
    </motion.div>

  ) : (

    <motion.div
      key="awards"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <CtfAwards />

      <button
        onClick={() => setShowAwards(false)}
        className="mt-6 rounded-xl border border-primary/30 px-5 py-3"
      >
        ← Back
      </button>
    </motion.div>

  )}

</AnimatePresence>
      </div>
    </section>
  )
}