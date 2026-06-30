import { SectionLabel } from './SectionLabel'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-[#f7f8fc]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="font-display mt-4 text-4xl font-light leading-tight text-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            {description}
          </p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
