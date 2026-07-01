const serviceLinks = [
  'Career Consulting',
  'Executive Placement',
  'CV & Brand Development',
  'Interview Mastery',
  'Salary Negotiation',
  'Graduate Transition',
]

const companyLinks = [
  'About Us',
  'Our Process',
  'Success Stories',
  'Partner Network',
  'Careers at Bridgelink',
  'Contact',
]

function FooterLogo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path d="M7 0L14 14H0L7 0Z" fill="#ffffff" />
      </svg>
      <span className="font-display text-lg font-light tracking-tight text-white">
        Bridgelink<span className="text-gold">.</span>
      </span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Executive career consultancy for professionals who expect
              strategic guidance, not transactional placement.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={
                      link === "Contact"
                        ? "/contact"
                        : link === "Our Process"
                          ? "/process"
                          : link === "Success Stories"
                            ? "/stories"
                            : link === "About Us"
                              ? "/about"
                              : "/services"
                    }
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>+233 (0)24 499 4544</li>
              <li>partners@bridgelink.co.uk</li>
              <li>GP, ACCRA - GHANA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/30 sm:flex-row lg:px-8">
          <p>
            Bridgelink Career Consultancy Ltd. Registered in England & Wales No.
            08472931
          </p>
          <p>
            &copy; {new Date().getFullYear()} Bridgelink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
