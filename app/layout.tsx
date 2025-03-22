import { ReactNode } from 'react'

import './globals.css'

interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang={'en'}>
      <body>{children}</body>
    </html>
  )
}
