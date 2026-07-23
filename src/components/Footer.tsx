import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.jpeg'
import { contactPoints } from '../data/content'

const portfolioLinks = [
  "Corporate & Business Consultancy",
  "Agricultural Venture Advisory",
  "Medical & Educational Infrastructure",
  "Premium Real Estate Advisory",
  "Logistics & Transportation Systems",
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/about#how-we-work" },
  { label: "Leadership", href: "/about#governance" },
  { label: "Insights & Briefings", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Secure Enquiry", href: "/contact" },
];

function FooterLogo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logoWhite}
        alt="BridgeLink Services UG Ltd logo"
        className="h-8 w-auto"
      />
    </Link>
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
              Elite multi-sector consultancy and bespoke operational
              infrastructure engineered for sovereign and private enterprises
              across West Africa.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
            >
              Request a Consultation
            </Link>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              Service Portfolios
            </h3>
            <ul className="mt-4 space-y-3">
              {portfolioLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link}
                  </Link>
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
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              Corporate Headquarters
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>{contactPoints[2].value}</li>
              <li>{contactPoints[3].value}</li>
              <li>{contactPoints[0].value}</li>
              <li>
                <a
                  href={`mailto:${contactPoints[1].value}`}
                  className="transition-colors hover:text-gold"
                >
                  {contactPoints[1].value}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-xs text-white/30">
            <p>
              &copy; {new Date().getFullYear()} BridgeLink Services UG Ltd. All
              rights reserved. Republic of Ghana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
