'use client'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '../ui/button'

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

type Props = {
  label: string
  status: FormStatus
}

export default function FormButton({ label, status }: Props) {
  const content = {
    idle: { text: label, icon: null },
    sending: {
      text: 'Sender...',
      icon: <Loader2 className="animate-spin" />,
    },
    sent: { text: 'Takk! Me tek kontakt snart', icon: null },
    error: { text: 'Noko gjekk gale — prøv igjen', icon: null },
  }[status]

  return (
    <Button
      type="submit"
      disabled={status === 'sending' || status === 'sent'}
      aria-live="polite"
      className={cn(
        'relative h-11 w-full cursor-pointer overflow-hidden transition-colors duration-300 disabled:opacity-100',
        status === 'sent' && 'bg-green-600 hover:bg-green-600',
        status === 'error' && 'bg-red-600 hover:bg-red-600'
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={status}
          initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
          className="flex items-center gap-2 font-semibold tracking-wide"
        >
          {content.icon}
          {content.text}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
