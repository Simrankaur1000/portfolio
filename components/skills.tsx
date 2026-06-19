'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { skillCategories } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  const [index, setIndex] = useState(0)
  const currentCategory =
  skillCategories[index] || skillCategories[0]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skillCategories.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <SectionHeading
        index="02 / SKILLS"
        title="Technologies, Tools & Security Domains"
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.5 }}
            className="glass glow-primary rounded-3xl p-8"
          >
            <h3 className="mb-6 text-center font-heading text-3xl font-bold text-primary">
              {currentCategory.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {currentCategory.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-primary/30
                    bg-primary/10
                    px-4
                    py-2
                    text-sm
                    transition-all
                    hover:scale-105
                    hover:border-primary
                    hover:bg-primary/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-6">

  {/* Previous */}
  <button
    onClick={() =>
      setIndex(
        (index - 1 + skillCategories.length) %
          skillCategories.length
      )
    }
    className="rounded-full border border-primary/30 px-4 py-2 text-primary transition hover:border-primary hover:bg-primary/10"
  >
    ←
  </button>

  {/* Dots */}
  <div className="flex gap-3">
    {skillCategories.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-3 w-3 rounded-full transition-all ${
          i === index
            ? 'bg-primary scale-125'
            : 'bg-primary/30'
        }`}
      />
    ))}
  </div>

  {/* Next */}
  <button
    onClick={() =>
      setIndex(
        (index + 1) %
          skillCategories.length
      )
    }
    className="rounded-full border border-primary/30 px-4 py-2 text-primary transition hover:border-primary hover:bg-primary/10"
  >
    →
  </button>

</div>
      </div>
    </section>
  )
}