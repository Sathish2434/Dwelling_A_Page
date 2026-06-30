import { HomeMark } from './Icons'

const columns = [
  {
    title: 'Explore',
    links: ['Apartments', 'Lofts', 'Independent Houses', 'Penthouses'],
  },
  {
    title: 'Company',
    links: ['About Dwelling', 'Our Hosts', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Centre', 'Schedule a Visit', 'Privacy', 'Terms'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-600 text-cream">
                <HomeMark width={18} height={18} />
              </span>
              <span className="font-display text-2xl text-cream">Dwelling</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              Premium, architecturally beautiful homes — curated for the way modern
              professionals actually want to live.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/90">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-cream/55 transition-colors hover:text-cream"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 text-sm text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Dwelling. Crafted for the Pegasus assignment.</p>
          <p>Made with care · Bengaluru · Mumbai · Delhi · Goa</p>
        </div>
      </div>
    </footer>
  )
}
