import PageBreadcrumb from '@/components/breadcrumb'
import EmptyState from '@/components/empty-state'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import RentalCard from '@/features/utleige/components/utleige/rental-card'
import { client } from '@/sanity/client'
import {
  CATEGORY_BY_SLUG_QUERY,
  RENTAL_BY_CATEGORY_QUERY,
} from '@/sanity/queries'
import { Category, Rental } from '@/sanity/types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Params = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const category: Category | null = await client.fetch(CATEGORY_BY_SLUG_QUERY, {
    slug,
  })
  if (!category) return { title: 'Utleige' }
  return {
    title: `${category.title} — utleige`,
    description: `Lei ${category.title.toLowerCase()} frå Vaktmesterutleie på Osterøy. Hent sjølv eller avtal levering.`,
  }
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const [category, items]: [Category | null, Rental[]] = await Promise.all([
    client.fetch(CATEGORY_BY_SLUG_QUERY, { slug }),
    client.fetch(RENTAL_BY_CATEGORY_QUERY, { slug }),
  ])

  if (!category) notFound()

  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <div className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            label="utleigekatalog"
            title={category.title}
            subtitle="Tilhengarar, stillas, stigar og verktøy til gode prisar. Hent sjølv eller avtal levering."
          />
          <PageBreadcrumb title={category.title} />
        </Section>
      </div>
      <Section constraint>
        {items.length > 0 ? (
          <RentalCard items={items} />
        ) : (
          <EmptyState
            title="Ikkje noko utstyr her enno"
            description="Me legg inn meir utstyr fortløpande. Ta kontakt, så hjelper me deg å finne det du treng."
            href="/kontakt"
            cta="Send førespurnad"
          />
        )}
      </Section>
    </Section>
  )
}
