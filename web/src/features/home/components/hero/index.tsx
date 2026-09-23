import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-6">
        <span className="link-brand uppercase">Vaktmesterutleie</span>
        <h1 className="hero-title text-balance md:text-5xl md:leading-tight">
          Handverk du kan stole på.
        </h1>
        <p className="hero-subtitle max-w-md">
          Vaktmeistertenester, utstyrsutleige og droneinspeksjon.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="px-4">
            <Link href="/kontakt">Få eit gratis tilbod</Link>
          </Button>
          <Button asChild variant="outline" className="px-4">
            <Link href="/utleige">Sjå utleigekatalog</Link>
          </Button>
        </div>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          Raskt og uforpliktande tilbod.
        </p>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-gray-200 md:aspect-[5/6]">
        <Image
          src="/sivert.jpg"
          alt="Sivert Sørås frå Vaktmesterutleie"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[center_25%]"
        />
      </div>
    </div>
  )
}
