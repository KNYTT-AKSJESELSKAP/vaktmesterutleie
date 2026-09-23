import FormWrapper from '@/components/forms/form-wrapper'
import PageHeader from '@/components/page-header'
import Section from '@/components/wrapper/section'
import ContactInfo from '@/features/kontakt/components/contact-info'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Ta kontakt for uforpliktande tilbod.',
}

type Props = {
  searchParams: Promise<{ tag?: string }>
}

export default async function Page({ searchParams }: Props) {
  const { tag } = await searchParams

  return (
    <Section className="flex flex-col gap-14 min-h-screen pb-40">
      <div className="bg-white border-b py-20">
        <Section constraint>
          <PageHeader
            label="kontakt oss"
            title="Me svarer raskt"
            subtitle="Fyll ut skjemaet nedanfor eller ring oss direkte."
          />
        </Section>
      </div>
      <Section constraint>
        <div className="flex flex-col gap-10 py-4 md:flex-row md:justify-between md:gap-8">
          <FormWrapper tag={tag} />
          <div className="md:w-80 md:shrink-0">
            <ContactInfo />
          </div>
        </div>
      </Section>
    </Section>
  )
}
