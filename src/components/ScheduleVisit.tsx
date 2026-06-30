import { useId, useState, type FormEvent } from 'react'
import { properties } from '../data'
import {
  CalendarIcon,
  CheckCircle,
  HomeMark,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from './Icons'

interface Props {
  selectedPropertyId: string
  onSelectProperty: (id: string) => void
}

const today = new Date().toISOString().split('T')[0]

const fieldBase =
  'peer w-full rounded-xl border border-ink/15 bg-cream px-11 py-3.5 text-ink outline-none transition-all duration-200 placeholder:text-ink/35 hover:border-ink/30 focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/12'

export default function ScheduleVisit({
  selectedPropertyId,
  onSelectProperty,
}: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const ids = useId()

  const selected = properties.find((p) => p.id === selectedPropertyId)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setDate('')
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <section id="visit" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_60px_-30px_rgba(29,36,33,0.4)] ring-1 ring-ink/5 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* left visual / copy panel */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
              alt="A warm, styled interior ready for viewing"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-forest-900/20" />
            <div className="relative flex h-full flex-col justify-end p-10 text-cream">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-6 bg-gold" />
                Schedule a Visit
              </span>
              <h2 className="mt-4 font-display text-4xl leading-tight">
                Let&apos;s find a time that works for you
              </h2>
              <p className="mt-3 max-w-sm text-cream/75">
                Pick a property and a preferred date — our resident host will
                confirm within a few hours and walk you through every corner.
              </p>
              <ul className="mt-7 space-y-3 text-sm">
                {[
                  'Private, no-pressure tours',
                  'Flexible weekday & weekend slots',
                  'Virtual walkthrough on request',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-cream/85">
                    <CheckCircle width={18} height={18} className="text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* form */}
          <div className="p-7 sm:p-10">
            {submitted ? (
              <div className="flex min-h-100 flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-forest-50 text-forest-600">
                  <CheckCircle width={34} height={34} />
                </span>
                <h3 className="mt-6 font-display text-3xl text-ink">
                  Visit requested
                </h3>
                <p className="mt-3 max-w-sm text-ink/65">
                  Thanks{name ? `, ${name.split(' ')[0]}` : ''}! We&apos;ve noted
                  your interest in{' '}
                  <span className="font-semibold text-forest-700">
                    {selected?.name}
                  </span>
                  {date ? ` for ${new Date(date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}` : ''}
                  . A host will reach out shortly to confirm.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-ink/40 hover:bg-sand"
                >
                  Book another visit
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-3xl text-ink lg:hidden">
                    Schedule a Visit
                  </h2>
                  <p className="text-sm text-ink/60 lg:hidden">
                    Pick a property and a time that suits you.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${ids}-property`}
                    className="text-sm font-medium text-ink/75"
                  >
                    Property
                  </label>
                  <div className="relative">
                    <HomeMark
                      width={18}
                      height={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-600"
                    />
                    <select
                      id={`${ids}-property`}
                      value={selectedPropertyId}
                      onChange={(e) => onSelectProperty(e.target.value)}
                      className={`${fieldBase} cursor-pointer appearance-none pr-10`}
                    >
                      {properties.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {p.location}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${ids}-date`}
                    className="text-sm font-medium text-ink/75"
                  >
                    Preferred date
                  </label>
                  <div className="relative">
                    <CalendarIcon
                      width={18}
                      height={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-600"
                    />
                    <input
                      id={`${ids}-date`}
                      type="date"
                      required
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`${fieldBase} cursor-pointer`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${ids}-name`}
                    className="text-sm font-medium text-ink/75"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <UserIcon
                      width={18}
                      height={18}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-600"
                    />
                    <input
                      id={`${ids}-name`}
                      type="text"
                      required
                      placeholder="Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={fieldBase}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${ids}-email`}
                      className="text-sm font-medium text-ink/75"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <MailIcon
                        width={18}
                        height={18}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-600"
                      />
                      <input
                        id={`${ids}-email`}
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={fieldBase}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${ids}-phone`}
                      className="text-sm font-medium text-ink/75"
                    >
                      Phone
                    </label>
                    <div className="relative">
                      <PhoneIcon
                        width={18}
                        height={18}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-600"
                      />
                      <input
                        id={`${ids}-phone`}
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={fieldBase}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-clay px-6 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-xl active:translate-y-0"
                >
                  Request my visit
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                <p className="text-center text-xs text-ink/45">
                  By requesting a visit you agree to be contacted by a Dwelling host.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
