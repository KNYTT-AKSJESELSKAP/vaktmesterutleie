'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Field, FieldGroup, FieldLabel } from '../ui/field'
import { Textarea } from '../ui/textarea'
import { NativeSelect, NativeSelectOption } from '../ui/native-select'
import Container from '../wrapper/container'
import FormInput from './form-input'
import FormButton, { FormStatus } from './form-button'
import { sendMail } from '@/features/api/send-mail'

const schema = z.object({
  name: z.string().min(1, 'Namn er påkravd'),
  telephone: z.string().min(8, 'Telefon er påkravd'),
  email: z.email('Ugyldig e-post').optional().or(z.literal('')),
  service: z.string().min(1, 'Vel ein teneste'),
  message: z.string().min(1, 'Beskriv oppdraget'),
})

type Schema = z.infer<typeof schema>

export default function ServiceForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    setStatus('sending')
    try {
      await sendMail({
        type: 'vaktmeister',
        ...data,
      })
      setStatus('sent')
      reset()
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    if (status !== 'sent') return
    const timer = setTimeout(() => setStatus('idle'), 4000)
    return () => clearTimeout(timer)
  }, [status])
  return (
    <Container className="bg-white p-4 rounded-md border">
      <Container className="mb-6">
        <p className="card-title">Bestill teneste</p>
        <p className="card-subtitle">
          Beskriv oppdraget ditt, så gir me deg eit tilbod.
        </p>
      </Container>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FieldGroup className="flex flex-row gap-4">
          <FormInput
            placeholder="Ditt fulle namn"
            label="Namn*"
            htmlFor="name"
            {...register('name')}
            error={errors.name?.message}
          />
          <FormInput
            placeholder="+47 ..."
            label="Telefon*"
            type="tel"
            htmlFor="telephone"
            {...register('telephone')}
            error={errors.telephone?.message}
          />
        </FieldGroup>

        <FormInput
          type="email"
          htmlFor="email"
          label="E-post"
          placeholder="din@epost.no"
          {...register('email')}
          error={errors.email?.message}
        />

        <Field>
          <FieldLabel>Type teneste*</FieldLabel>
          <NativeSelect {...register('service')}>
            <NativeSelectOption value="">Vel teneste...</NativeSelectOption>
            <NativeSelectOption value="vaktmeister">
              Vaktmeisterteneste
            </NativeSelectOption>
            <NativeSelectOption value="drone">
              Droneinspeksjon
            </NativeSelectOption>
            <NativeSelectOption value="anna">Anna</NativeSelectOption>
          </NativeSelect>
          {errors.service && (
            <p className="text-xs text-red-500 mt-1">
              {errors.service.message}
            </p>
          )}
        </Field>

        <Field>
          <FieldLabel>Beskriv oppdraget*</FieldLabel>
          <Textarea
            className="h-40"
            placeholder="Fortel oss kva du treng hjelp med..."
            rows={5}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">
              {errors.message.message}
            </p>
          )}
        </Field>

        <FormButton label="Send førespurnad" status={status} />
      </form>
    </Container>
  )
}
