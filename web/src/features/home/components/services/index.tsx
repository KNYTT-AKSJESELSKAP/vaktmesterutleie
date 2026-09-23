import PageHeader from '@/components/page-header'
import ServicesCard from './card'

export default function Services() {
  return (
    <div>
      <PageHeader
        label="våre tenester"
        title="Alt du treng — éin leverandør"
        subtitle="Eit breitt spekter av tenester for privatpersonar og bedrifter."
      />
      <ServicesCard />
    </div>
  )
}
