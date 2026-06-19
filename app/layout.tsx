import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Simran Kaur — Cyber Security Portfolio | VAPT · SOC · Forensics',
  description:
    'MSc Advanced Networking & Cyber Security student. Aspiring penetration tester specializing in VAPT, SOC operations, digital forensics, and CTF challenges.',
  generator: 'v0.app',
  keywords: [
    'cyber security',
    'penetration testing',
    'VAPT',
    'SOC analyst',
    'digital forensics',
    'CTF',
    'portfolio',
  ],
  openGraph: {
    title: 'Simran Kaur — Cyber Security Portfolio',
    description:
      'Aspiring penetration tester · VAPT · SOC · Digital Forensics · CTF',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
