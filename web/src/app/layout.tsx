import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { client } from '@/sanity/client'
import { PROJECT_COUNT_QUERY } from '@/sanity/queries'

const fontInter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Vaktmesterutleie',
    template: '%s | Vaktmesterutleie',
  },
  description:
    'Vaktmeistertenester, utstyrleige og droneinspeksjon i Osterøy- og Bergenregionen.',
  metadataBase: new URL('https://vaktmesterutleie.no'),
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const projectCount: number = await client.fetch(PROJECT_COUNT_QUERY)
  const hasProjects = projectCount > 0

  return (
    <html
      lang="nn"
      className={cn('h-full', 'antialiased', fontInter.className, 'font-sans')}
    >
      <body className="min-h-full flex flex-col">
        <Header hasProjects={hasProjects} />
        <main className="grow bg-white">{children}</main>
        <Footer hasProjects={hasProjects} />
      </body>
    </html>
  )
}
