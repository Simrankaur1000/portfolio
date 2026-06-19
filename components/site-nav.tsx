
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

import { navLinks } from '@/lib/data'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  }, [])

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        flex
        justify-center
        px-4
        pt-4
      "
    >
      <nav
        className={`
          flex
          w-full
          max-w-5xl
          items-center
          justify-between
          rounded-2xl
          px-4
          py-3
          transition-all
          duration-300
          sm:px-6

          ${
            scrolled
              ? 'glass glow-primary'
              : 'border border-transparent'
          }
        `}
      >

        {/* LEFT LOGO */}

        
        <a
          href="#home"
          className="
            relative
            font-heading
            text-lg
            font-extrabold
            tracking-wider
            select-none
          "
        >

          <span className="rgb-logo">
            SK
          </span>

        </a>



        {/* DESKTOP NAV */}

        <ul
          className="
            hidden
            items-center
            gap-1
            md:flex
          "
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RESUME */}

        <a
          href="#resume"
          className="
            hidden
            rounded-lg
            border
            border-primary/40
            bg-primary/10
            px-4
            py-2
            text-sm
            font-medium
            text-primary
            transition-all
            hover:bg-primary/20
            hover:glow-primary
            md:inline-block
          "
        >
          Resume
        </a>

        {/* MOBILE MENU */}

        <button
          onClick={() =>
            setOpen((v) => !v)
          }
          className="
            rounded-lg
            p-2
            text-foreground
            md:hidden
          "
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </nav>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="
              glass
              absolute
              inset-x-4
              top-20
              z-50
              rounded-2xl
              p-4
              md:hidden
            "
          >

            <ul className="flex flex-col gap-1">

              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      text-muted-foreground
                      transition-colors
                      hover:bg-secondary
                      hover:text-foreground
                    "
                  >
                    {l.label}
                  </a>
                </li>
              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  )
}

