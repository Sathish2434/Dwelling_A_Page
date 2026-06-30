import { useState } from 'react'
import { localities } from '../data'
import { formatPerSqFt } from '../utils'
import {
  MetroIcon,
  ShieldIcon,
  SparkIcon,
  TrendDown,
  TrendUp,
  WalkIcon,
} from './Icons'

function ScoreBar({
  label,
  value,
  icon: Icon,
}: {
  label: string
  value: number
  icon: typeof ShieldIcon
}) {
  const tone =
    value >= 85 ? 'bg-forest-600' : value >= 70 ? 'bg-gold' : 'bg-clay'
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 font-medium text-ink/80">
          <Icon width={17} height={17} className="text-forest-600" />
          {label}
        </span>
        <span className="font-semibold text-ink">{value}/100</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-sand">
        <div
          key={`${label}-${value}`}
          className={`h-full origin-left rounded-full ${tone}`}
          style={{
            width: `${value}%`,
            animation: 'grow-bar 0.9s cubic-bezier(0.22,1,0.36,1) both',
          }}
        />
      </div>
    </div>
  )
}

export default function LocalityInsights() {
  const [activeId, setActiveId] = useState(localities[0].id)
  const active = localities.find((l) => l.id === activeId) ?? localities[0]
  const trendUp = active.priceTrendPct >= 0

  return (
    <section
      id="insights"
      className="scroll-mt-24 bg-forest-900 py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-6 bg-gold" />
            Locality Insights
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Know the neighbourhood before you knock
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Live market signals for each area — pricing momentum, safety,
            walkability and what&apos;s nearby. Pick a locality to explore.
          </p>
        </div>

        {/* locality selector */}
        <div className="mt-10 flex flex-wrap gap-2">
          {localities.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveId(l.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                l.id === activeId
                  ? 'bg-cream text-forest-900 shadow-md'
                  : 'border border-cream/20 text-cream/75 hover:border-cream/50 hover:text-cream'
              }`}
            >
              {l.name.split(',')[0]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* headline price + trend */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl bg-forest-700/60 p-6 ring-1 ring-cream/10">
              <p className="text-xs uppercase tracking-[0.16em] text-cream/60">
                Average Price
              </p>
              <p className="mt-3 font-display text-4xl">
                {formatPerSqFt(active.avgPricePerSqFt).replace('/sq ft', '')}
              </p>
              <p className="mt-1 text-sm text-cream/60">per sq ft</p>
              <div
                className={`mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ${
                  trendUp
                    ? 'bg-forest-500/30 text-forest-100'
                    : 'bg-clay/25 text-clay'
                }`}
              >
                {trendUp ? (
                  <TrendUp width={16} height={16} />
                ) : (
                  <TrendDown width={16} height={16} />
                )}
                {trendUp ? '+' : ''}
                {active.priceTrendPct}% YoY
              </div>
            </div>

            <div className="grid gap-5">
              <div className="flex items-center gap-4 rounded-3xl bg-forest-700/60 p-5 ring-1 ring-cream/10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream/10 text-gold">
                  <MetroIcon width={22} height={22} />
                </span>
                <div>
                  <p className="font-display text-2xl">{active.metroDistanceKm} km</p>
                  <p className="text-sm text-cream/60">to nearest metro</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-forest-700/60 p-5 ring-1 ring-cream/10">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream/10 text-gold">
                  <SparkIcon width={22} height={22} />
                </span>
                <div>
                  <p className="font-display text-2xl">{active.amenities}</p>
                  <p className="text-sm text-cream/60">amenities within 2 km</p>
                </div>
              </div>
            </div>
          </div>

          {/* scores + blurb */}
          <div className="flex flex-col gap-6 rounded-3xl bg-cream p-7 text-ink">
            <p className="text-sm leading-relaxed text-ink/70">{active.blurb}</p>
            <div className="space-y-5">
              <ScoreBar label="Safety" value={active.safetyScore} icon={ShieldIcon} />
              <ScoreBar
                label="Walkability"
                value={active.walkabilityScore}
                icon={WalkIcon}
              />
            </div>
            <a
              href="#visit"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-600"
            >
              Schedule a visit in {active.name.split(',')[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
