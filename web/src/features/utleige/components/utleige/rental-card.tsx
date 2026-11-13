import { urlFor } from '@/sanity/image'
import { Rental } from '@/sanity/types'
import { ArrowRight } from 'lucide-react'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

const formatPrice = (value: number) => value.toLocaleString('nb-NO')

function Price({ rental }: { rental: Rental }) {
  const day = rental.pricePerDay ?? 0
  const week = rental.pricePerWeek ?? 0

  if (day <= 0 && week <= 0)
    return <p className="text-base font-semibold">Pris etter avtale</p>

  const main =
    day > 0 ? { value: day, unit: 'dag' } : { value: week, unit: 'veke' }
  const showWeek = day > 0 && week > 0

  return (
    <div className="flex flex-col gap-1.5">
      <p className="flex items-baseline gap-1.5 tabular-nums">
        <span className="text-3xl font-bold leading-none tracking-tight">
          {formatPrice(main.value)}
        </span>
        <span className="text-sm font-medium text-gray-500">
          kr / {main.unit}
        </span>
      </p>
      {showWeek && (
        <p className="w-fit rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium tabular-nums text-gray-700">
          {formatPrice(week)} kr / veke
        </p>
      )}
    </div>
  )
}

export default function RentalCard({ items }: { items: Rental[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((data) => (
        <li
          key={data._id}
          className="group relative flex flex-col overflow-hidden rounded-xl border bg-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
            {data.image?.image ? (
              <Image
                src={urlFor(data.image.image).width(800).url()}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                alt={data.image.alt ?? data.title}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-gray-400">Bilete kjem snart</span>
              </div>
            )}
          </div>

          <div className="flex grow flex-col gap-2 p-5">
            <p className="card-title">{data.title}</p>
            {data.specs && (
              <p className="card-subtitle line-clamp-2 whitespace-pre-line leading-relaxed">
                {data.specs.replace(/\n{2,}/g, '\n').trim()}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 border-t bg-gray-50/70 px-5 py-4">
            <Price rental={data} />
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition group-hover:gap-2.5">
              Lei
              <ArrowRight className="size-4" />
            </span>
          </div>

          <Link
            className="absolute inset-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            href={`/kontakt?utstyr=${encodeURIComponent(data.title)}`}
            aria-label={`Lei ${data.title}`}
          />
        </li>
      ))}
    </ul>
  )
}
