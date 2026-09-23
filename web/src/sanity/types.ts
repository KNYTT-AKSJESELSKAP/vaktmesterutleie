import { SanityImageSource } from '@sanity/image-url'

export type Service = {
  _id: string
  href: string
  title: string
  image?: ImageWithAlt | null
  tags?: string[]
  description: string
  cta?: string | null
}

export type ImageWithAlt = {
  image: SanityImageSource
  alt?: string
}

type Slug = {
  current: string
}

export type Category = {
  _id: string
  title: string
  slug: Slug
  count?: number
  cover?: ImageWithAlt | null
}

export type Rental = {
  _id: string
  title: string
  image: ImageWithAlt | null
  specs: string | null
  available: boolean
  pricePerDay: number | null
  pricePerWeek: number | null
}

export type Project = {
  _id: string
  title: string
  slug: { current: string }
  category?: string
  location?: string
  date?: string
  description?: string
  beforeImage?: ImageWithAlt
  afterImage?: ImageWithAlt
  image?: ImageWithAlt[]
}
