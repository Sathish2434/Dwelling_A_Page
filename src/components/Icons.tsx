import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const BedIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 7v11M3 12h18v6M21 18v-4a3 3 0 0 0-3-3H8v4" />
    <path d="M7 11V9a2 2 0 0 1 2-2" />
  </svg>
)

export const BathIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 12V6a2 2 0 0 1 4 0v1" />
    <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2Z" />
    <path d="M6 18l-1 2M18 18l1 2" />
  </svg>
)

export const AreaIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 9V4h5M20 15v5h-5M4 4l6 6M20 20l-6-6" />
  </svg>
)

export const PinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
)

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
)

export const TrendUp = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M21 7v5h-5" />
  </svg>
)

export const TrendDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 7l6 6 4-4 8 8" />
    <path d="M21 17v-5h-5" />
  </svg>
)

export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const WalkIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="13" cy="4.5" r="1.6" />
    <path d="M11 21l1.5-6L10 12l1-5 3 2 2 1" />
    <path d="M11 9l-2 3-3 1M12.5 15l2.5 2 1 4" />
  </svg>
)

export const MetroIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="6" y="3" width="12" height="13" rx="3" />
    <path d="M6 11h12M9.5 7h5M8 20l-2 2M16 20l2 2" />
    <circle cx="9" cy="13.5" r=".6" fill="currentColor" />
    <circle cx="15" cy="13.5" r=".6" fill="currentColor" />
  </svg>
)

export const SparkIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
  </svg>
)

export const CalendarIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
)

export const CheckCircle = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.3 2.3L16 9" />
  </svg>
)

export const UserIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const HomeMark = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 11 12 5l8 6v7a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1v-7Z" />
  </svg>
)

export const StarIcon = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="m12 3 2.5 5.5L20 9.3l-4 3.9 1 5.8-5-2.8-5 2.8 1-5.8-4-3.9 5.5-.8L12 3Z" />
  </svg>
)
