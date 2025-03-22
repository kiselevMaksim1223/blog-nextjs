import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeInitializer } from '@application/theme/theme-initializer'

interface LayoutProps {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default async function Layout({ children }: LayoutProps) {
  return (
    <html lang={'en'}>
      <ThemeInitializer />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
