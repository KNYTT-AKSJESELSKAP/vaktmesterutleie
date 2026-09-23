'use client'
import { Suspense, useState } from 'react'
import ServiceForm from './service-form'
import RentalForm from './rental-form'
import Container from '../wrapper/container'
import { Button } from '../ui/button'
export default function FormWrapper({ tag }: { tag?: string }) {
  const [showForm, setShowForm] = useState(!!tag)

  return (
    <Container className="flex flex-col gap-8 grow">
      <Container className="flex flex-col sm:flex-row gap-2">
        <Button
          className="grow cursor-pointer"
          onClick={() => setShowForm(false)}
          variant={!showForm ? 'outline' : 'secondary'}
        >
          <span> Utleigeførespurnad</span>
        </Button>
        <Button
          className="grow cursor-pointer"
          onClick={() => setShowForm(true)}
          variant={showForm ? 'outline' : 'secondary'}
        >
          <span> Vaktmeister / Drone</span>
        </Button>
      </Container>
      <Suspense fallback={null}>
        <Container>{showForm ? <ServiceForm /> : <RentalForm />}</Container>
      </Suspense>
    </Container>
  )
}
