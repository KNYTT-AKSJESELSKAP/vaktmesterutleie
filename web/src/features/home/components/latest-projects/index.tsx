import PageHeader from '@/components/page-header'
import ProjectCard from '@/features/projects/components/project-card/card'
import { Project } from '@/sanity/types'
import Link from 'next/link'

export default function LatestProjects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <PageHeader
          label="siste jobbar"
          title="Nyleg utført arbeid"
          subtitle="Eit utval av prosjekt me har gjennomført."
        />
        <Link
          href="/prosjekt"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:underline"
        >
          Sjå alle prosjekt
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((item) => (
          <ProjectCard key={item._id} item={item} />
        ))}
      </ul>
    </div>
  )
}
