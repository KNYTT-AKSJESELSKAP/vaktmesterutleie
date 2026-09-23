import PageHeader from '@/components/page-header'

const REASONS = [
  {
    title: 'Tømrarbakgrunn',
    description: 'Fagbrev og lang erfaring frå handverkarbransjen.',
  },
  {
    title: 'Éin leverandør',
    description: 'Handverk, utstyr og inspeksjon på ein stad.',
  },
  {
    title: 'Raskt tilbod',
    description: 'Rask respons — uforpliktande og gratis.',
  },
]

export default function WhyUs() {
  return (
    <div>
      <PageHeader label="kvifor oss" title="Trygt og ryddig" />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {REASONS.map((reason) => (
          <li
            key={reason.title}
            className="flex flex-col gap-2 rounded-lg border bg-white p-6"
          >
            <p className="font-semibold">{reason.title}</p>
            <p className="card-subtitle leading-relaxed">
              {reason.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
