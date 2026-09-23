import { Button } from '@/components/ui/button'
import Container from '@/components/wrapper/container'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from '@/lib/contact'

function ContactRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="text-sm">
        <p className="font-semibold text-gray-900">{label}</p>
        <div className="text-gray-500">{children}</div>
      </div>
    </li>
  )
}

export default function ContactInfo() {
  return (
    <Container className="flex flex-col gap-6">
      <div className="rounded-md border bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">Kontaktinfo</h2>

        <ul className="mt-6 flex flex-col gap-6">
          <ContactRow label="Adresse">
            {ADDRESS.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ContactRow>

          <ContactRow label="Telefon">
            <Link href={PHONE_HREF} className="hover:text-gray-900 underline">
              {PHONE}
            </Link>
          </ContactRow>

          <ContactRow label="E-post">
            <Link
              href={`mailto:${EMAIL}`}
              className="hover:text-gray-900 underline"
            >
              {EMAIL}
            </Link>
          </ContactRow>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-md border bg-white p-6 text-center sm:p-8">
        <p className="text-xl font-bold text-gray-900">Hastar det?</p>
        <p className="text-sm text-gray-500">Ring oss direkte for rask hjelp</p>
        <Button asChild size="lg" className="mt-2 w-full rounded-md">
          <Link href={PHONE_HREF}>{PHONE}</Link>
        </Button>
      </div>
    </Container>
  )
}
