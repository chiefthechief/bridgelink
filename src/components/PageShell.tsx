import type { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

type PageShellProps = {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-white text-navy">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
