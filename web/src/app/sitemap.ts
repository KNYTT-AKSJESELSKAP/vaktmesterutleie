import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { PROJECT_QUERY, CATEGORY_QUERY } from '@/sanity/queries'
import { Project, Category } from '@/sanity/types'

const BASE = 'https://vaktmesterutleie.no'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects: Project[] = await client.fetch(PROJECT_QUERY)
  const categories: Category[] = await client.fetch(CATEGORY_QUERY)

  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/utleige',
    ...(projects.length > 0 ? ['/prosjekt'] : []),
    '/om-oss',
    '/kontakt',
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/prosjekt/${p.slug.current}`,
    lastModified: p.date ? new Date(p.date) : new Date(),
  }))

  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((c) => (c.count ?? 0) > 0)
    .map((c) => ({
      url: `${BASE}/utleige/${c.slug.current}`,
      lastModified: new Date(),
    }))

  return [...staticPages, ...projectPages, ...categoryPages]
}
