'use client'
import { PHONE_HREF } from '@/lib/contact'
import Link from 'next/link'
import { useState } from 'react'
import DesktopNavigation from '../navigation/desktop-navigation'
import MobileNavigation from '../navigation/mobile-navigation'
import { getNavigationItems } from '../navigation/navigation-items'
import { Button } from '../ui/button'
import Container from '../wrapper/container'
import Hamburger from './hamburger'
import Logo from './logo'

export default function Header({ hasProjects }: { hasProjects: boolean }) {
  const [open, setOpen] = useState(false)
  const items = getNavigationItems(hasProjects)

  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)
  return (
    <header className="border-b bg-white py-5 px-4">
      <Container className="max-w-6xl w-full mx-auto flex justify-between items-center gap-4">
        <Logo variant="small" />

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:block">
            <DesktopNavigation items={items} />
          </div>
          <Button asChild className="px-3">
            <Link href={PHONE_HREF}>Ring oss</Link>
          </Button>
          <div className="md:hidden block">
            <Hamburger onOpen={onOpen} />
            <MobileNavigation items={items} open={open} onClose={onClose} />
          </div>
        </div>
      </Container>
    </header>
  )
}
