import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/logo'
import { getNavigationItems } from '../navigation/navigation-items'
import { ADDRESS, EMAIL, ORG_NR, PHONE, PHONE_HREF } from '@/lib/contact'

export default function Footer({ hasProjects }: { hasProjects: boolean }) {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo variant="small" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Vaktmeistertenester, utstyrsutleige og droneinspeksjon i Osterøy-
              og Bergensregionen.
            </p>
            <p className="text-xs text-gray-400">Org.nr: {ORG_NR}</p>
          </div>
          <div>
            <p className="font-medium">Sider</p>
            <ul className="flex flex-col gap-1 mt-3">
              {getNavigationItems(hasProjects).map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-sm text-gray-600 hover:text-gray-900"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Kontakt</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <span>
                  {ADDRESS[0]}
                  <br />
                  {ADDRESS[1]}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <a
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                  href={PHONE_HREF}
                >
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <a
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Følg oss</p>
            <div className="flex gap-2">
              <a
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100075706164014"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <path
                    d="M168,88H152a24,24,0,0,0-24,24V224"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <line
                    x1="96"
                    y1="144"
                    x2="160"
                    y2="144"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </a>
              <a
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/vaktmesterutleie/"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                >
                  <circle
                    cx="128"
                    cy="128"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="16"
                  />
                  <rect
                    x="32"
                    y="32"
                    width="192"
                    height="192"
                    rx="48"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <circle cx="180" cy="76" r="12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-xs text-gray-400">
              © 2026 Vaktmesterutleie. Alle rettar reserverte.
            </p>
            <a
              href="https://knytt.io"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600"
            >
              Utvikla av
              <Image
                src="/knytt-logo.svg"
                alt=""
                width={16}
                height={16}
                className="size-4 opacity-40 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="font-medium">Knytt</span>
            </a>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              className="text-xs text-gray-400 hover:text-gray-600"
              href="/personvern"
            >
              Personvern
            </Link>
            <Link
              href="/om-oss"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Om oss
            </Link>
            <Link
              href="/kontakt"
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
