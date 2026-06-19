
'use client'

import { motion } from 'motion/react'

import {
  FileSearch,
  FolderGit2,
  ArrowUpRight,
} from 'lucide-react'

import {
  GithubIcon,
} from '@/components/social-icons'

import {
  projects,
} from '@/lib/data'

import {
  SectionHeading,
} from '@/components/section-heading'

export function Projects() {
  return (
    <section
      id="projects"
      className="
        mx-auto
        max-w-6xl
        px-5
        py-24
      "
    >
      <SectionHeading
        index="04 / PROJECTS"
        title="Featured work."
        subtitle="Labs, research and tooling built to strengthen practical cybersecurity skills."
      />

      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >

        {projects.map(
          (
            p,
            i
          ) => (
            <motion.article
              key={p.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                duration: 0.5,
                delay:
                  (i %
                    2) *
                  0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-card
                p-6
                backdrop-blur
                transition-colors
                hover:border-primary/50
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    'radial-gradient(400px circle at 50% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)',
                }}
              />

              <div
                className="
                  relative
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-border
                    bg-background/50
                    text-primary
                  "
                >
                  <FolderGit2 className="h-5 w-5" />
                </span>

                {p.featured && (
                  <span
                    className="
                      rounded-full
                      border
                      border-accent/40
                      bg-accent/10
                      px-3
                      py-1
                      font-mono
                      text-[10px]
                      text-accent
                    "
                  >
                    FEATURED
                  </span>
                )}

              </div>

              <h3
                className="
                  relative
                  font-heading
                  text-xl
                  font-bold
                "
              >
                {p.title}
              </h3>

              <p
                className="
                  relative
                  mt-3
                  flex-1
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                "
              >
                {p.desc}
              </p>

              <div
                className="
                  relative
                  mt-5
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {p.tags.map(
                  (
                    t
                  ) => (
                    <span
                      key={
                        t
                      }
                      className="
                        rounded-md
                        border
                        border-border
                        bg-background/40
                        px-2
                        py-1
                        font-mono
                        text-[10px]
                      "
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              <div
                className="
                  relative
                  mt-6
                  flex
                  gap-3
                "
              >

                <a
                  href={
                    p.github
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border
                    bg-background/50
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition
                    hover:border-primary/50
                    hover:text-primary
                  "
                >
                  <GithubIcon className="h-4 w-4" />

                  GitHub

                  <ArrowUpRight className="h-3 w-3" />
                </a>

                {p.demo && (
                  <a
                    href={
                      p.demo
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-border
                      bg-background/50
                      px-4
                      py-2
                      text-xs
                      font-medium
                      transition
                      hover:border-accent/50
                      hover:text-accent
                    "
                  >
                    <FileSearch className="h-4 w-4" />

                    View Project

                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}

              </div>

            </motion.article>
          )
        )}

      </div>
    </section>
  )
}

