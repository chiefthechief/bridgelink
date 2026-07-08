import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-gold" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489392191049-fc10c97e1b30?w=1920&h=1080&fit=crop&auto=format)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,138,247,0.75)_0%,rgba(74,138,247,0.55)_45%,rgba(74,138,247,0.35)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-2 lg:items-center">
            <h1 className="font-display mt-6 w-full text-center text-5xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl mx-auto">
              Bridging Capital,
              <br />
              Governance, and
              <br />
              <span className="gold-emphasis">Global Enterprise.</span>
            </h1>
            <div className="mt-6 max-w-xl space-y-3 text-xl leading-relaxed text-white/80">
              <p>
                Elite multi-sector consultancy and bespoke operational
                infrastructure engineered for sovereign and private enterprises
                across West Africa.
              </p>
            </div>
            <div className="mt-10 flex w-full flex-wrap gap-4 lg:justify-center">
              <a
                href="/contact"
                className="bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold/90"
              >
                Initiate Consultation
              </a>
              <a
                href="/services"
                className="border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Explore Service Portfolios
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          size={24}
          className="animate-bounce-subtle text-white/40"
        />
      </div>
    </section>
  );
}
