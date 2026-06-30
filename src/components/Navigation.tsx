import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollY } from '../hooks/useScrollY'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path d="M7 0L14 14H0L7 0Z" fill={light ? '#ffffff' : '#0D1F4A'} />
      </svg>
      <span
        className={`font-display text-lg font-light tracking-tight ${light ? 'text-white' : 'text-navy'}`}
      >
        Bridgelink<span className="text-gold">.</span>
      </span>
    </a>
  )
}

export function Navigation() {
  const scrolled = useScrollY(50)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navClass = scrolled
    ? 'bg-white/95 border-b border-border text-navy shadow-sm'
    : 'bg-transparent text-white border-b border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo light={!scrolled} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-navy' : 'text-white/80'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-muted-text' : 'text-white/70'}`}
          >
            Book a call
          </a>
          <a
            href="#contact"
            className={`px-5 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? 'bg-navy text-white hover:bg-navy/90'
                : 'bg-white text-navy hover:bg-white/90'
            }`}
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-navy hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <a
              href="#contact"
              className="text-sm font-medium text-muted-text hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </a>
            <a
              href="#contact"
              className="bg-navy px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
