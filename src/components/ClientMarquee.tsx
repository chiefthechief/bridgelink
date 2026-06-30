const clients = [
  'Barclays',
  'Deloitte',
  'Goldman Sachs',
  'McKinsey & Company',
  'Morgan Stanley',
  'PwC',
  'Rothschild & Co',
  'UBS',
  'Blackstone',
  'KPMG',
  'HSBC',
  'JP Morgan',
]

export function ClientMarquee() {
  const duplicated = [...clients, ...clients]

  return (
    <section className="overflow-hidden bg-muted-surface py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicated.map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="mx-8 text-xs font-medium uppercase tracking-[0.25em] text-muted-text"
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  )
}
