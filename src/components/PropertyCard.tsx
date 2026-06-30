import type { Property } from '../data'
import { formatPerSqFt, formatPrice } from '../utils'
import { AreaIcon, BathIcon, BedIcon, PinIcon } from './Icons'

interface Props {
  property: Property
  onSchedule: (id: string) => void
}

export default function PropertyCard({ property, onSchedule }: Props) {
  const specs = [
    { icon: BedIcon, label: `${property.bedrooms} Bed` },
    { icon: BathIcon, label: `${property.bathrooms} Bath` },
    { icon: AreaIcon, label: `${property.areaSqFt.toLocaleString('en-IN')} sq ft` },
  ]

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(29,36,33,0.06)] ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-18px_rgba(29,36,33,0.32)]">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70" />

        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-forest-700 shadow-sm backdrop-blur">
          {property.category}
        </span>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-cream">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cream/80">
              {formatPerSqFt(property.pricePerSqFt)}
            </p>
            <p className="font-display text-2xl leading-tight">{formatPrice(property.price)}</p>
          </div>
        </div>

        {/* hover reveal CTA */}
        <button
          type="button"
          onClick={() => onSchedule(property.id)}
          className="absolute bottom-4 right-4 translate-y-3 rounded-full bg-clay px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-clay-dark group-hover:translate-y-0 group-hover:opacity-100"
        >
          Schedule visit
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink transition-colors group-hover:text-forest-700">
          {property.name}
        </h3>
        <p className="mt-1 text-sm text-ink/55">{property.tagline}</p>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-ink/70">
          <PinIcon width={16} height={16} className="text-clay" />
          {property.location}
        </div>

        <div className="mt-5 flex items-center gap-5 border-t border-ink/10 pt-4 text-sm text-ink/75">
          {specs.map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <s.icon width={17} height={17} className="text-forest-500" />
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {property.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-forest-50 px-3 py-1 text-xs font-medium text-forest-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
