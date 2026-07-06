import logoWhite from '../assets/logo-white.jpeg'

const serviceLinks = [
  "Executive Search & Placement",
  "Board of Directors Advisory",
  "C-Suite Brand Development",
  "Compensation & Equity Negotiation",
];

const companyLinks = [
  "About Us",
  "Our Process",
  "Opportunities",
  "Leadership Team",
  "Contact",
];

function FooterLogo() {
  return (
    <a href="/" className="flex items-center">
      <img src={logoWhite} alt="Bridgelink logo" className="h-8 w-auto" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Elevating Executive Trajectories with premium advisory, discreet
              search capability, and strategic negotiation support.
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
                          : link === "Opportunities"
                            ? "/stories"
                            : link === "About Us"
                              ? "/about"
                              : "/about"
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
              <li>+44 20 7946 1824</li>
              <li>partners@bridgelink.co.uk</li>
              <li>20 St James&apos;s Square, London SW1Y 4JH</li>
              <li>
                <a
                  href="/privacy"
                  className="transition-colors hover:text-gold"
                >
                  Privacy Policy
                </a>
              </li>
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
