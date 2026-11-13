'use client'
import { AnimatePresence, motion } from 'motion/react'
import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

type Props = {
  label: string
  htmlFor: string
  type?: 'text' | 'password' | 'tel' | 'email'
  placeholder?: string
  error?: string
}

export default function FormInput({
  label,
  type = 'text',
  htmlFor,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <Field>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      <Input placeholder={placeholder} type={type} {...rest} />
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-xs text-red-500 mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </Field>
  )
}
