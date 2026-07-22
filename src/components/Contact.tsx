import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { contactPoints } from '../data/content'

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: contactPoints[0].value,
    href: "tel:+233244994544",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactPoints[1].value,
    href: `mailto:${contactPoints[1].value}`,
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: contactPoints[2].value,
    href: undefined,
  },
];

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
              Let's Start a Conversation
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-text">
              Whether you’re seeking expert advice or a trusted partner, Bridge
              Link is ready to help. Every enquiry is treated with
              professionalism, discretion, and strict confidentiality.
            </p>

            <div className="mt-10 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
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
                );
              })}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-border bg-muted-surface p-10 text-center">
                <p className="font-display text-2xl font-light text-navy">
                  Thank you for your enquiry.
                </p>
                <p className="mt-3 text-sm text-muted-text">
                  Our governance desk will respond within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Organization / Institution
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    placeholder="Organization"
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@institution.gov.gh"
                    className="w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted-text"
                  >
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Briefly describe the engagement"
                    className="w-full resize-none border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy py-4 text-sm font-medium text-white transition-colors hover:bg-navy/90"
                >
                  Send Email
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
