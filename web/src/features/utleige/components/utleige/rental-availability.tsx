import { cn } from '@/lib/utils'

export default function RentalAvailability({
  available,
}: {
  available: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium shadow-sm',
        available ? 'bg-white text-green-700' : 'bg-white text-red-600'
      )}
    >
      <span
        className={cn(
          'size-1.5 rounded-full',
          available ? 'bg-green-500' : 'bg-red-500'
        )}
      />
      {available ? 'Ledig' : 'Utleigd'}
    </span>
  )
}
