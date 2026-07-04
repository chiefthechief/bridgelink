import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { stories, values } from '../data/content'

export function StoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success Stories"
        title="Evidence of progress from leaders who needed more than a standard search."
        description="These engagements show how Bridgelink strengthens positioning, opens the right opportunities, and supports clients through decisive career transitions."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/about"
            className="bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
          >
            Learn about Bridgelink
          </Link>
          <Link
            to="/contact"
            className="border border-border px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Start your own story
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="border border-border bg-white p-8 shadow-[0_12px_40px_rgba(25,86,190,0.06)]">
              <h2 className="font-display text-2xl font-light text-navy">
                {story.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {story.summary}
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Outcome
                </p>
                <p className="mt-2 text-base leading-relaxed text-navy">
                  {story.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-none border border-border bg-[#f8f9fc] p-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-display text-xl font-light text-navy">
                {value.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
