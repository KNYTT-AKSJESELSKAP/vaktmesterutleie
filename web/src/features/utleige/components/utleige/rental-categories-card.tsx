import EmptyState from '@/components/empty-state'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/image'
import { CATEGORY_QUERY } from '@/sanity/queries'
import { Category } from '@/sanity/types'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

export default async function RentalCategoryCard() {
  const data: Category[] = await client.fetch(CATEGORY_QUERY)
  // Skjul kategoriar utan utstyr, så katalogen aldri viser tomme sider.
  const categories = data.filter((item) => (item.count ?? 0) > 0)

  if (categories.length === 0)
    return (
      <EmptyState
        title="Utleigekatalogen kjem snart"
        description="Me held på å leggje inn utstyret vårt. Ta kontakt, så hjelper me deg å finne det du treng."
        href="/kontakt"
        cta="Send førespurnad"
      />
    )

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((item) => (
        <li
          key={item._id}
          className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
            {item.cover?.image && (
              <Image
                src={urlFor(item.cover.image).width(800).url()}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                alt=""
              />
            )}
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div className="flex flex-col gap-0.5">
              <p className="card-title">{item.title}</p>
              <p className="card-subtitle">{item.count} produkt</p>
            </div>
          </div>

          <Link
            className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label={`Gå til ${item.title}`}
            href={`/utleige/${item.slug.current}`}
          />
        </li>
      ))}
    </ul>
  )
}
