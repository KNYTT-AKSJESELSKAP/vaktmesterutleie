import { urlFor } from '@/sanity/image'
import { Rental } from '@/sanity/types'
import RentalAvailability from './rental-availability'
import { Image } from 'next-sanity/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const formatPrice = (value: number) => value.toLocaleString('nb-NO')

function Price({ rental }: { rental: Rental }) {
  const day = rental.pricePerDay ?? 0
  const week = rental.pricePerWeek ?? 0

  if (day <= 0 && week <= 0)
    return (
      <p className="text-sm font-medium text-gray-500">Pris etter avtale</p>
    )

  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      {day > 0 && (
        <p>
          <span className="text-xl font-bold">{formatPrice(day)}</span>{' '}
          <span className="text-sm text-gray-500">kr / dag</span>
        </p>
      )}
      {week > 0 && (
        <p className={cn(day > 0 && 'text-sm text-gray-500')}>
          <span
            className={cn(
              day > 0 ? 'font-semibold text-gray-700' : 'text-xl font-bold'
            )}
          >
            {formatPrice(week)}
          </span>{' '}
          <span className="text-sm text-gray-500">kr / veke</span>
        </p>
      )}
    </div>
  )
}

export default function RentalCard({ items }: { items: Rental[] }) {
  const sorted = [...items].sort((a, b) =>
    a.available === b.available ? 0 : a.available ? -1 : 1
  )

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.map((data) => (
        <li
          key={data._id}
          className={cn(
            'group relative flex flex-col overflow-hidden rounded-lg border bg-white transition',
            data.available
              ? 'hover:-translate-y-0.5 hover:shadow-lg'
              : 'opacity-70'
          )}
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
            <div className="absolute left-3 top-3">
              <RentalAvailability available={data.available} />
            </div>
          </div>

          <div className="flex grow flex-col gap-3 p-5">
            <p className="card-title">{data.title}</p>
            {data.specs && (
              <p className="card-subtitle line-clamp-3 whitespace-pre-line leading-relaxed">
                {data.specs.replace(/\n{2,}/g, '\n').trim()}
              </p>
            )}

            <div className="mt-auto flex items-end justify-between gap-4 border-t pt-4">
              <Price rental={data} />
              {data.available && (
                <span className="shrink-0 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                  Lei
                </span>
              )}
            </div>
          </div>

          {data.available && (
            <Link
              className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              href={`/kontakt?utstyr=${encodeURIComponent(data.title)}`}
              aria-label={`Lei ${data.title}`}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
