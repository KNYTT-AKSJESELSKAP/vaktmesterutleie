import EmptyState from '@/components/empty-state'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import ProjectCard from '@/features/projects/components/project-card/card'
import { client } from '@/sanity/client'
import { PROJECT_QUERY } from '@/sanity/queries'
import { Project } from '@/sanity/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prosjekt',
  description:
    'Sjå tidlegare arbeid — renovering, vedlikehald og droneinspeksjon i Osterøy og Bergen.',
}

export default async function Page() {
  const data: Project[] = await client.fetch(PROJECT_QUERY)

  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <div className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            title="Prosjektgalleri"
            label="tidlegare arbeid"
            subtitle="Sjå før- og etterbilete frå prosjekt me har gjennomført."
          />
        </Section>
      </div>
      <Section constraint>
        {data.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item) => (
              <ProjectCard key={item._id} item={item} />
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Prosjektgalleriet kjem snart"
            description="Me held på å samle bilete frå tidlegare oppdrag. Har du eit prosjekt du vil ha hjelp med? Ta kontakt for eit uforpliktande tilbod."
            cta="Få eit gratis tilbod"
          />
        )}
      </Section>
    </Section>
  )
}
