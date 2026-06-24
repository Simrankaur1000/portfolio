
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Download,
  Trophy,
  Eye,
  X,
} from 'lucide-react'

const certificates = [
  {
    id: '1',
    title: 'ZeroDayHeist',
    image: '/certificates/ZeroDayHeist.png',
    file: '/certificates/ZeroDayHeist.png',
  },

  {
    id: '2',
    title: 'HackZero',
    image: '/certificates/hackzero.png',
    file: '/certificates/hackzero.pdf',
  },

  {
    id: '3',
    title: 'SecLeaf',
    image: '/certificates/secleaf.jpeg',
    file: '/certificates/secleaf.pdf',
  },

  {
    id: '4',
    title: 'THEM?!',
    image: '/certificates/them.jpeg',
    file: '/certificates/them.pdf',
  },

  {
    id: '5',
    title: 'BrainCon 2026',
    image: '/certificates/braincon2026.png',
    file: '/certificates/braincon2026.pdf',
  },

  {
    id: '6',
    title: 'boroCTF',
    image: '/certificates/boroCTF.png',
    file: '/certificates/boroCTF.pdf',
  },
]


export default function CertificatesPage() {
  const [preview, setPreview] =
    useState<any>(null)

  const isPdf = (
    file: string
  ) =>
    file
      .toLowerCase()
      .endsWith('.pdf')

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-12
      "
    >

      {/* HEADER */}

      <div className="text-center mb-12">

        <motion.div
          animate={{
            rotate: [
              0,
              8,
              -8,
              0,
            ],
          }}
          transition={{
            repeat:
              Infinity,
            duration: 4,
          }}
        >
          <Trophy
            className="
              mx-auto
              h-10
              w-10
              text-yellow-400
            "
          />
        </motion.div>

        <h1
          className="
            mt-4
            text-4xl
            font-bold
          "
        >
          CTF Certificates
        </h1>

        <p
          className="
            mt-2
            text-gray-400
          "
        >
          My verified
          cybersecurity
          achievements
        </p>

      </div>

      {/* GRID */}

      <div
        className="
          mx-auto
          grid
          max-w-5xl
          gap-8
          md:grid-cols-2
        "
      >

        {certificates.map(
          (
            cert,
            i
          ) => (
            <motion.div
              key={
                cert.id
              }
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  i *
                  0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-800
                bg-gray-900
                transition
                hover:border-yellow-400
              "
            >

              {/* PREVIEW IMAGE */}

              {isPdf(
                cert.image
              ) ? (
                <div
                  className="
                    flex
                    h-56
                    items-center
                    justify-center
                    bg-gray-950
                    text-gray-400
                  "
                >
                  PDF Preview
                </div>
              ) : (
                <img
                  src={
                    cert.image
                  }
                  alt={
                    cert.title
                  }
                  className="
                    h-56
                    w-full
                    object-cover
                  "
                />
              )}

              <div className="p-5">

                <h2
                  className="
                    mb-5
                    text-xl
                    font-bold
                  "
                >
                  {
                    cert.title
                  }
                </h2>

                <div className="flex gap-3">

                  {/* PREVIEW */}

                  <button
                    onClick={() =>
                      setPreview(
                        cert
                      )
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-blue-600
                      px-4
                      py-2
                      text-sm
                      hover:bg-blue-500
                    "
                  >
                    <Eye className="w-4 h-4" />

                    Preview
                  </button>

                  {/* DOWNLOAD */}

                  <a
                    href={
                      cert.file
                    }
                    download
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-green-600
                      px-4
                      py-2
                      text-sm
                      hover:bg-green-500
                    "
                  >
                    <Download className="w-4 h-4" />

                    Download
                  </a>

                </div>

              </div>

            </motion.div>
          )
        )}

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {preview && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setPreview(
                null
              )
            }
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              backdrop-blur-xl
              p-6
            "
          >

            <motion.div
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.9,
              }}
              onClick={(
                e
              ) =>
                e.stopPropagation()
              }
              className="
                relative
                max-w-6xl
                rounded-2xl
                bg-black
                p-5
              "
            >

              <button
                onClick={() =>
                  setPreview(
                    null
                  )
                }
                className="
                  absolute
                  right-3
                  top-3
                  z-50
                "
              >
                <X />
              </button>

              {isPdf(
                preview.file
              ) ? (
                <iframe
                  src={
                    preview.file
                  }
                  className="
                    h-[80vh]
                    w-[80vw]
                    rounded-xl
                  "
                />
              ) : (
                <img
                  src={
                    preview.image
                  }
                  alt=""
                  className="
                    max-h-[80vh]
                    rounded-xl
                  "
                />
              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  )
}

