import { PHONE_HREF } from '@/lib/contact'
import Link from 'next/link'
import { Button } from '../ui/button'

type Props = {
  subtitle: string
  title: string
  description: string
}
export default function CTA({ subtitle, title, description }: Props) {
  return (
    <section className="border-t bg-white px-4 py-24 md:py-32">
      <div className="mx-auto flex max-w-xl flex-col gap-4 text-center">
        <p className="link-brand uppercase">{subtitle}</p>
        <h2 className="hero-title text-balance">{title}</h2>
        <p className="subtitle">{description}</p>

        <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="w-full px-4 sm:w-auto">
            <Link href="/kontakt">Send førespurnad</Link>
          </Button>
          <Button variant="outline" asChild className="w-full px-4 sm:w-auto">
            <Link href={PHONE_HREF}>Ring oss</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
