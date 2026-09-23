import CTA from '@/components/cta'
import Section from '@/components/wrapper/section'
import Hero from '@/features/home/components/hero'
import LatestProjects from '@/features/home/components/latest-projects'
import Services from '@/features/home/components/services'
import WhyUs from '@/features/home/components/why-us'
import { client } from '@/sanity/client'
import { LATEST_PROJECTS_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Heim',
  description:
    'Vaktmeistertenester, utstyrleige og droneinspeksjon i Osterøy- og Bergenregionen. Raskt og uforpliktande tilbod.',
}

// "Siste jobbar" visast berre når det finst minst tre prosjekt.
const MIN_PROJECTS = 3

export default async function Page() {
  const projects: Project[] = await client.fetch(LATEST_PROJECTS_QUERY)

  return (
    <div className="flex flex-col">
      <div className="py-16 md:py-24">
        <Section constraint>
          <Hero />
        </Section>
      </div>

      <Section constraint className="py-20">
        <Services />
      </Section>

      <Section constraint className="pb-20">
        <WhyUs />
      </Section>

      {projects.length >= MIN_PROJECTS && (
        <Section constraint className="py-20">
          <LatestProjects projects={projects} />
        </Section>
      )}

      <CTA
        subtitle="klar til å starte?"
        title="Fortel oss kva du treng — me ordnar resten"
        description="Enten du treng ein handverkar, leige utstyr eller ein droneinspeksjon."
      />
    </div>
  )
}
