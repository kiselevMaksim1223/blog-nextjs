import { ReactNode } from 'react'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import classNames from 'classnames'

import { ThemeInitializer } from '@application/theme/theme-initializer'

import './globals.css'

interface LayoutProps {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export default async function Layout({ children }: LayoutProps) {
  const theme = (await cookies()).get('theme')?.value
  return (
    <html className={theme} lang={'en'}>
      <ThemeInitializer />
      <body
        className={classNames(inter.className, 'bg-gray-100 dark:bg-gray-900')}
      >
        {children}
      </body>
    </html>
  )
}
