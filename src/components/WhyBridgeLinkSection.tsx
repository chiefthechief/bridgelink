import { Network, Puzzle, ShieldCheck, Handshake, Target, Globe } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const pillars = [
  {
    title: 'Multidisciplinary Expertise',
    description:
      'We bring together expertise across business advisory, agribusiness, healthcare, education, real estate, and transportation, enabling clients to access integrated solutions through a single trusted partner.',
    Icon: Network,
  },
  {
    title: 'Local Insight, International Perspective',
    description:
      'Our leadership combines deep understanding of Ghana’s business environment with international experience and professional networks, helping clients navigate opportunities with confidence at both local and international levels.',
    Icon: Globe,
  },
  {
    title: 'Integrity & Good Governance',
    description:
      'We uphold the highest standards of ethics, transparency, and accountability in every engagement. Strong governance is at the heart of how we build lasting relationships and deliver trusted advisory services.',
    Icon: ShieldCheck,
  },
  {
    title: 'Tailored Advisory Solutions',
    description:
      'Every client is different. We take time to understand each organization’s objectives, challenges, and operating environment before developing practical solutions that are relevant, measurable, and sustainable.',
    Icon: Target,
  },
  {
    title: 'Collaborative Partnerships',
    description:
      'We work alongside our clients rather than simply providing recommendations. By building long-term relationships founded on trust and open communication, we support successful implementation and lasting impact.',
    Icon: Handshake,
  },
  {
    title: 'Sustainable Impact',
    description:
      'We focus on creating long-term value by helping organizations strengthen governance, improve performance, and make informed decisions that contribute to sustainable growth.',
    Icon: Puzzle,
  },
]

export function WhyBridgeLinkSection() {
  return (
    <AnimatedSection id="why-bridgelink" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Why Bridge Link</p>
          <p className="mt-5 text-lg leading-relaxed text-muted-text">
            “We understand that choosing an advisory partner is about more than expertise; it’s about trust, collaboration, and confidence. At Bridge Link, we combine multidisciplinary knowledge, ethical leadership, and practical solutions to help our clients achieve sustainable success.”
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.Icon
            return (
              <div
                key={pillar.title}
                className="rounded-none border border-border bg-[#f7f8fc] p-8 shadow-[0_10px_30px_rgba(25,86,190,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-gold text-navy">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-xl font-light text-navy">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}

