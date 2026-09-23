import { client } from '@/sanity/client'
import { SERVICE_QUERY } from '@/sanity/queries'
import { Service } from '@/sanity/types'
import Link from 'next/link'

// Brukast når ingen tenester er lagt inn i Sanity enno.
const FALLBACK: Service[] = [
  {
    _id: 'vaktmeister',
    title: 'Vaktmeistertenester',
    description:
      'Vedlikehald, reparasjonar og småjobbar — utført av fagfolk med tømrarbakgrunn.',
    href: '/kontakt?tag=vaktmeistertenester',
  },
  {
    _id: 'utleige',
    title: 'Utstyrsutleige',
    description:
      'Tilhengarar, stillas, stigar og verktøy til gode prisar. Hent sjølv eller avtal levering.',
    href: '/utleige',
    cta: 'Sjå katalog',
  },
  {
    _id: 'drone',
    title: 'Droneinspeksjon',
    description:
      'Trygg og rask inspeksjon av tak og fasadar utan stillas eller lift.',
    href: '/kontakt?tag=drone',
  },
]

export default async function ServicesCard() {
  const data: Service[] = await client.fetch(SERVICE_QUERY)
  const services = data.length > 0 ? data : FALLBACK

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {services.map((item) => (
        <li
          key={item._id}
          className="group relative flex flex-col gap-4 rounded-lg border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <p className="card-title">{item.title}</p>
          <p className="card-subtitle leading-relaxed">{item.description}</p>
          <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-neutral-900">
            {item.cta ??
              (item.href === '/utleige' ? 'Sjå katalog' : 'Be om tilbod')}
          </span>
          <Link
            className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            href={item.href || '/kontakt'}
            aria-label={`Gå til ${item.title}`}
          />
        </li>
      ))}
    </ul>
  )
}
