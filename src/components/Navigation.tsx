import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoBlue from '../assets/logo-blue.jpeg'
import logoWhite from '../assets/logo-white.jpeg'
import { useScrollY } from '../hooks/useScrollY'

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/process" },
  { label: "Opportunities", href: "/stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={light ? logoWhite : logoBlue}
        alt="Bridgelink logo"
        className="h-8 w-auto"
      />
    </Link>
  )
}

export function Navigation() {
  const scrolled = useScrollY(50)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isOpaque = scrolled || !isHome

  const navClass = isOpaque
    ? 'bg-white/95 border-b border-border text-navy shadow-sm'
    : 'bg-transparent text-white border-b border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Logo light={isHome && !scrolled} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${isOpaque ? 'text-navy' : 'text-white/80'} ${isActive ? 'text-gold' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors hover:text-gold ${isOpaque ? 'text-muted-text' : 'text-white/70'}`}
          >
            Book a call
          </Link>
          <Link
            to="/contact"
            className={`px-5 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? 'bg-navy text-white hover:bg-navy/90'
                : 'bg-white text-navy hover:bg-white/90'
            }`}
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className={`lg:hidden ${isOpaque ? 'text-navy' : 'text-white'}`}
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
                <Link
                  to={link.href}
                  className={`block text-sm font-medium ${location.pathname === link.href ? 'text-gold' : 'text-navy'} hover:text-gold`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-text hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </Link>
            <Link
              to="/contact"
              className="bg-navy px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
