import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const contactDetails = [
  {
    icon: Phone,
    label: 'Telephone',
    value: '+233 (0)24 499 4544',
    href: 'tel:+233244994544',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'partners@bridgelink.co.uk',
    href: 'mailto:partners@bridgelink.co.uk',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'GP, ACCRA - GHANA',
    href: undefined,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatedSection id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-4xl font-light text-navy md:text-5xl">
              Let&apos;s start the conversation.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              All enquiries are handled confidentially by a named Bridgelink
              partner. We typically respond within one business day.
            </p>

            <div className="mt-10 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-muted-surface">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-text">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-navy hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-navy">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-border bg-muted-surface p-10 text-center">
                <p className="font-display text-2xl font-light text-navy">
                  Thank you for reaching out.
                </p>
                <p className="mt-3 text-sm text-muted-text">
                  A Bridgelink partner will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentRole"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Current Role
                  </label>
                  <input
                    id="currentRole"
                    name="currentRole"
                    type="text"
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy py-4 text-sm font-medium text-white transition-colors hover:bg-navy/90"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
