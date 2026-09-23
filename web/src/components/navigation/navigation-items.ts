export type NavigationItem = { id: number; label: string; href: string }

export const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Heim', href: '/' },
  { id: 2, label: 'Utleige', href: '/utleige' },
  { id: 3, label: 'Prosjekt', href: '/prosjekt' },
  { id: 4, label: 'Om oss', href: '/om-oss' },
  { id: 5, label: 'Kontakt', href: '/kontakt' },
]

// Skjul prosjektsida frå menyen til det er lagt inn prosjekt.
export function getNavigationItems(hasProjects: boolean) {
  return hasProjects
    ? navigationItems
    : navigationItems.filter((item) => item.href !== '/prosjekt')
}
