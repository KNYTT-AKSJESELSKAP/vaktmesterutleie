import { urlFor } from '@/sanity/image'
import { Project } from '@/sanity/types'
import { Image } from 'next-sanity/image'
import Link from 'next/link'

export default function ProjectCard({ item }: { item: Project }) {
  const cover =
    item.afterImage?.image ?? item.image?.[item.image.length - 1]?.image

  return (
    <li className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        {cover && (
          <Image
            src={urlFor(cover).width(800).url()}
            fill
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            alt={item.afterImage?.alt ?? item.title ?? 'Alternativ tekst'}
          />
        )}
      </div>

      <div className="flex grow flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="card-title">{item.title}</p>
        </div>
        {item.location && (
          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            {item.location}
          </p>
        )}
        {item.description && (
          <p className="card-subtitle line-clamp-2">{item.description}</p>
        )}
      </div>

      <Link
        className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        href={`/prosjekt/${item.slug.current}`}
        aria-label={`Sjå prosjekt: ${item.title}`}
      />
    </li>
  )
}
