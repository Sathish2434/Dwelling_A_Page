export type PropertyCategory = 'Apartment' | 'Loft' | 'House' | 'Penthouse'

export interface Property {
  id: string
  name: string
  tagline: string
  category: PropertyCategory
  location: string
  price: number
  pricePerSqFt: number
  bedrooms: number
  bathrooms: number
  areaSqFt: number
  image: string
  tags: string[]
  featured?: boolean
}

export interface Locality {
  id: string
  name: string
  avgPricePerSqFt: number
  priceTrendPct: number // positive = up, negative = down (YoY)
  safetyScore: number // 0-100
  walkabilityScore: number // 0-100
  metroDistanceKm: number
  amenities: number // count of notable amenities within 2km
  blurb: string
}

const img = (id: string, w = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const properties: Property[] = [
  {
    id: 'garden-studio',
    name: 'The Minimalist Garden Studio',
    tagline: 'Light-drenched calm wrapped in greenery',
    category: 'Apartment',
    location: 'Indiranagar, Bengaluru',
    price: 12500000,
    pricePerSqFt: 14200,
    bedrooms: 1,
    bathrooms: 1,
    areaSqFt: 880,
    image: img('photo-1505691938895-1758d7feb511'),
    tags: ['Garden View', 'Pet Friendly', 'Furnished'],
    featured: true,
  },
  {
    id: 'midcentury-penthouse',
    name: 'Mid-Century Penthouse',
    tagline: 'Skyline living with a warm retro soul',
    category: 'Penthouse',
    location: 'Bandra West, Mumbai',
    price: 84000000,
    pricePerSqFt: 38500,
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 2180,
    image: img('photo-1502672260266-1c1ef2d93688'),
    tags: ['Sea View', 'Private Terrace', 'Smart Home'],
    featured: true,
  },
  {
    id: 'industrial-loft',
    name: 'Modern Industrial Loft',
    tagline: 'Exposed brick, soaring ceilings, bold lines',
    category: 'Loft',
    location: 'Hauz Khas, New Delhi',
    price: 31000000,
    pricePerSqFt: 21000,
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1475,
    image: img('photo-1522708323590-d24dbb6b0267'),
    tags: ['Double Height', 'Work Studio', 'Corner Unit'],
    featured: true,
  },
  {
    id: 'coastal-house',
    name: 'The Coastal Courtyard House',
    tagline: 'An independent home built around quiet light',
    category: 'House',
    location: 'Assagao, Goa',
    price: 56000000,
    pricePerSqFt: 18800,
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 2980,
    image: img('photo-1568605114967-8130f3a36994'),
    tags: ['Private Pool', 'Courtyard', 'Garden'],
    featured: true,
  },
  {
    id: 'glass-apartment',
    name: 'The Glasshouse Apartment',
    tagline: 'Floor-to-ceiling glass, framed by the city',
    category: 'Apartment',
    location: 'Koregaon Park, Pune',
    price: 27500000,
    pricePerSqFt: 16400,
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 1320,
    image: img('photo-1493809842364-78817add7ffb'),
    tags: ['Skyline View', 'Concierge', 'Gym'],
    featured: true,
  },
  {
    id: 'heritage-villa',
    name: 'Restored Heritage Villa',
    tagline: 'Old-world craft meets contemporary comfort',
    category: 'House',
    location: 'Alipore, Kolkata',
    price: 73000000,
    pricePerSqFt: 22500,
    bedrooms: 5,
    bathrooms: 5,
    areaSqFt: 3640,
    image: img('photo-1576941089067-2de3c901e126'),
    tags: ['Heritage', 'Landscaped', 'Library'],
    featured: true,
  },
]

export const localities: Locality[] = [
  {
    id: 'indiranagar',
    name: 'Indiranagar, Bengaluru',
    avgPricePerSqFt: 14200,
    priceTrendPct: 8.4,
    safetyScore: 86,
    walkabilityScore: 92,
    metroDistanceKm: 0.4,
    amenities: 48,
    blurb: 'Leafy, walkable, and packed with cafés, boutiques and parks.',
  },
  {
    id: 'bandra',
    name: 'Bandra West, Mumbai',
    avgPricePerSqFt: 38500,
    priceTrendPct: 5.1,
    safetyScore: 82,
    walkabilityScore: 88,
    metroDistanceKm: 1.2,
    amenities: 61,
    blurb: 'The cultural heart of the city — seafront promenades and nightlife.',
  },
  {
    id: 'hauzkhas',
    name: 'Hauz Khas, New Delhi',
    avgPricePerSqFt: 21000,
    priceTrendPct: -2.3,
    safetyScore: 78,
    walkabilityScore: 81,
    metroDistanceKm: 0.7,
    amenities: 54,
    blurb: 'Historic lake and fort, design studios, and a vibrant village core.',
  },
  {
    id: 'assagao',
    name: 'Assagao, Goa',
    avgPricePerSqFt: 18800,
    priceTrendPct: 12.7,
    safetyScore: 90,
    walkabilityScore: 64,
    metroDistanceKm: 14.5,
    amenities: 29,
    blurb: 'Quiet villas among palm groves — the new haven for remote work.',
  },
]
