
'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

import {
  GithubIcon,
  LinkedinIcon,
} from '@/components/social-icons'

import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-24"
    >
      <SectionHeading
        index="08 / CONTACT"
        title="Let's connect."
        subtitle="Open to internships, collaborations and cybersecurity opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">

        {/* CONTACT CARDS */}

        <div className="space-y-4">

          {[
            {
              icon: Mail,
              label: 'Email',
              value: profile.email,
              href: `mailto:${profile.email}`,
              c: 'text-primary',
            },

            {
              icon: GithubIcon,
              label: 'GitHub',
              value: 'github.com/simrankaur1000',
              href: profile.github,
              c: 'text-accent',
            },

            {
              icon: LinkedinIcon,
              label: 'LinkedIn',
              value: 'linkedin.com/in/simran-kaur-915207212',
              href: profile.linkedin,
              c: 'text-purple',
            },

          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
              }}
              className="
                group
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-border
                bg-card
                p-4
                backdrop-blur
                transition
                hover:border-primary/40
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
                "
              >
                <item.icon
                  className={`h-5 w-5 ${item.c}`}
                />
              </span>

              <div>
                <p
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-widest
                    text-muted-foreground
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    text-sm
                    font-medium
                    transition-colors
                    group-hover:text-foreground
                  "
                >
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}

        </div>

        {/* FORM */}

        <motion.form
          action="https://formsubmit.co/simrankaur0101010@gmail.com"
          method="POST"
          onSubmit={() => setSent(true)}
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="glass rounded-2xl p-6"
        >

          {/* FORM SETTINGS */}

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="hidden"
            name="_next"
            value="https://portfolio-website-a8bgqbur0-simrankaur0101010-3853s-projects.vercel.app/#contact"
          />

          <div className="grid gap-4 sm:grid-cols-2">

            <Field
              label="Name"
              id="name"
            >
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background/50
                  px-3
                  py-2.5
                  text-sm
                  outline-none
                  focus:border-primary/60
                "
              />
            </Field>

            <Field
              label="Email"
              id="email"
            >
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background/50
                  px-3
                  py-2.5
                  text-sm
                  outline-none
                  focus:border-primary/60
                "
              />
            </Field>

          </div>

          <div className="mt-4">

            <Field
              label="Website / Company URL"
              id="website"
            >
              <input
                id="website"
                name="website"
                type="url"
                placeholder="https://company.com"
                className="
                  w-full
                  rounded-lg
                  border
                  border-border
                  bg-background/50
                  px-3
                  py-2.5
                  text-sm
                  outline-none
                  focus:border-primary/60
                "
              />
            </Field>

          </div>

          <div className="mt-4">

            <Field
              label="Message"
              id="message"
            >
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the opportunity..."
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-border
                  bg-background/50
                  px-3
                  py-2.5
                  text-sm
                  outline-none
                  focus:border-primary/60
                "
              />
            </Field>

          </div>

          <button
            type="submit"
            disabled={sent}
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-primary-foreground
              transition-all
              hover:glow-primary
              disabled:opacity-70
            "
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Message sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>

        </motion.form>

      </div>
    </section>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <label
      htmlFor={id}
      className="block"
    >
      <span
        className="
          mb-1.5
          block
          font-mono
          text-[11px]
          uppercase
          tracking-widest
          text-muted-foreground
        "
      >
        {label}
      </span>

      {children}
    </label>
  )
}

