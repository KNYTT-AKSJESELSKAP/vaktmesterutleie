import { Button } from '@/components/ui/button'
import { PHONE_HREF } from '@/lib/contact'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  href?: string
  cta?: string
  className?: string
}

export default function EmptyState({
  title,
  description,
  href = '/kontakt',
  cta = 'Ta kontakt',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-4 rounded-md border border-dashed bg-white px-6 py-16 text-center sm:py-20',
        className
      )}
    >
      <div className="flex max-w-md flex-col gap-2">
        <p className="text-xl font-semibold text-neutral-900">{title}</p>
        <p className="subtitle">{description}</p>
      </div>
      <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button asChild className="px-4">
          <Link href={href}>{cta}</Link>
        </Button>
        <Button asChild variant="outline" className="px-4">
          <Link href={PHONE_HREF}>Ring oss</Link>
        </Button>
      </div>
    </div>
  )
}
