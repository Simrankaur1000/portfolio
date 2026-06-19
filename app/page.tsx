import { CyberBackground } from '@/components/cyber-background'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Certifications } from '@/components/certifications'
import { Projects } from '@/components/projects'
import { CTFArena } from '@/components/ctf-arena'
import { Experience } from '@/components/experience'
import { Resume } from '@/components/resume'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <SiteNav />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <CTFArena />
        <Experience />
        <Resume />
        <Contact />
        <SiteFooter />
      </div>
    </main>
  )
}