interface Props {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
        <span className="h-px w-6 bg-clay" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink/65">{description}</p>
      )}
    </div>
  )
}
