import { ArrowUpRight, StarIcon } from './Icons'

const stats = [
  { value: '320+', label: 'Curated homes' },
  { value: '18', label: 'Premium localities' },
  { value: '4.9', label: 'Client rating' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-forest-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-72 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-700/15 bg-forest-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Homes, beautifully curated
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Find a home that
            <span className="relative whitespace-nowrap">
              {' '}
              feels{' '}
              <span className="italic text-forest-700">like you</span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Dwelling helps working professionals discover premium, architecturally
            beautiful apartments, lofts and independent houses — presented with the
            clarity and care they deserve.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#properties"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 px-7 py-3.5 text-base font-semibold text-cream shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-xl"
            >
              Explore properties
              <ArrowUpRight
                width={18}
                height={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#insights"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-3.5 text-base font-semibold text-ink transition-all duration-300 hover:border-ink/40 hover:bg-sand"
            >
              View locality insights
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-forest-700">{s.value}</dt>
                <dd className="mt-1 text-sm text-ink/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-float-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-ink/5">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="A bright, modern living room opening onto a garden"
              className="h-[440px] w-full object-cover sm:h-[560px]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* floating rating card */}
          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-cream/95 p-4 shadow-xl ring-1 ring-ink/5 backdrop-blur sm:block">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} width={14} height={14} />
              ))}
            </div>
            <p className="mt-1.5 text-sm font-semibold text-ink">Loved by 2,400+ residents</p>
            <p className="text-xs text-ink/55">Verified move-in reviews</p>
          </div>

          {/* floating price card */}
          <div className="absolute -bottom-5 right-2 rounded-2xl bg-forest-700 p-5 text-cream shadow-xl sm:right-6">
            <p className="text-xs uppercase tracking-[0.16em] text-cream/70">Starting from</p>
            <p className="mt-1 font-display text-3xl">₹1.25 Cr</p>
            <p className="text-xs text-cream/70">EMI plans available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
