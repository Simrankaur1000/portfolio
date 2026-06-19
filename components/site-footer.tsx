
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'
import { profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">

        {/* EMPTY LEFT SIDE */}
        <div />

        <p className="text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built secure, shipped fast.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  )
}

