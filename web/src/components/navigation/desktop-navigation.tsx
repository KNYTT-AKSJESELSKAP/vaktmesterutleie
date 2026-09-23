'use client'
import Link from 'next/link'
import { NavigationItem } from './navigation-items'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function DesktopNavigation({
  items,
}: {
  items: NavigationItem[]
}) {
  const pathname = usePathname()
  return (
    <nav className="flex justify-between">
      <ul className="flex gap-1">
        {items.map((item) => (
          <li
            className={cn(
              'text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md transition hover:bg-gray-100',
              {
                'bg-gray-100 text-black': pathname === item.href,
              }
            )}
            key={item.id}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
