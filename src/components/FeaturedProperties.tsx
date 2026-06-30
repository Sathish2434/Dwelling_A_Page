import { useMemo, useState } from 'react'
import { properties, type PropertyCategory } from '../data'
import PropertyCard from './PropertyCard'
import SectionHeading from './SectionHeading'

type Filter = 'All' | PropertyCategory

const filters: Filter[] = ['All', 'Apartment', 'Loft', 'House', 'Penthouse']

interface Props {
  onSchedule: (id: string) => void
}

export default function FeaturedProperties({ onSchedule }: Props) {
  const [active, setActive] = useState<Filter>('All')

  const visible = useMemo(
    () =>
      active === 'All'
        ? properties
        : properties.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="properties" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Properties"
            title="A collection worth coming home to"
            description="Every listing is hand-picked for its design, light and location — so you can browse fewer homes and love more of them."
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === f
                    ? 'bg-forest-700 text-cream shadow-md'
                    : 'border border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <PropertyCard key={p.id} property={p} onSchedule={onSchedule} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center text-ink/50">
            No properties in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  )
}
