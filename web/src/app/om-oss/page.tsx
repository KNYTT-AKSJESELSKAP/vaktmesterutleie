import CTA from '@/components/cta'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Om oss',
  description:
    'Me er eit lokalt firma frå Osterøy med tømrarbakgrunn og brei erfaring innan vaktmeistertenester og utstyrleige.',
}

const FACTS = [
  { value: '2019', label: 'Etablert' },
  { value: 'Tømrar', label: 'Fagbrev' },
]

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            label="om oss"
            title="Vaktmesterutleie"
            subtitle="Handverk, utstyr og inspeksjon under same tak."
          />
        </Section>
      </div>

      <Section
        constraint
        className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:gap-16"
      >
        <div className="relative aspect-[5/6] overflow-hidden rounded-md bg-gray-200">
          <Image
            src="/sivert.jpg"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            alt="Sivert Sørås frå Vaktmesterutleie"
            loading="eager"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="title">Handverk med fagbrev i botn</h2>
          <p className="subtitle">
            Vaktmesterutleie vart etablert i 2019. Med fagbrev som tømrar og
            driftstid som vaktmeister har me opparbeida oss ein brei kompetanse
            i handverkarbransjen. Ved behov har me faste innleigde
            samarbeidspartnarar.
          </p>
          <p className="subtitle">
            I tillegg til vaktmeistertenester leiger me ut tilhengarar, stillas,
            stigar og verktøy, og tilbyr droneinspeksjon av tak og fasadar.
          </p>
          <dl className="mt-2 grid grid-cols-2 gap-4 border-t pt-6">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1">
                <dt className="text-xs text-gray-500">{fact.label}</dt>
                <dd className="font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CTA
        subtitle="ta kontakt"
        title="Treng du hjelp med noko?"
        description="Få eit raskt og uforpliktande tilbod."
      />
    </div>
  )
}
