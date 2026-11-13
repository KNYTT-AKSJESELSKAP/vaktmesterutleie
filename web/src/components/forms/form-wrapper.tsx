'use client'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
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
          <span> Vaktmeister</span>
        </Button>
      </Container>
      <Suspense fallback={null}>
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={showForm ? 'service' : 'rental'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {showForm ? <ServiceForm /> : <RentalForm />}
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      </Suspense>
    </Container>
  )
}
