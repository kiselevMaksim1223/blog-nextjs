'use client'

import Link from 'next/link'

import useThemeStore from '@shared/model/useThemeStore'

type Props = {
  initialTheme: 'light' | 'dark'
}

export const Header = ({ initialTheme }: Props) => {
  const { theme, toggleTheme } = useThemeStore()

  const displayedTheme = theme || initialTheme

  return (
    <header
      className={
        'fixed z-10 h-18 w-full rounded-b-lg bg-white p-4 shadow-md dark:bg-gray-800'
      }
    >
      <div className={'container mx-auto flex items-center justify-between'}>
        <Link href={'/'}>
          <h1 className={'text-xl font-bold text-gray-900 dark:text-white'}>
            My Blog
          </h1>
        </Link>
        <button
          className={
            'rounded-lg bg-gray-200 p-2 text-gray-800 hover:cursor-pointer dark:bg-gray-700 dark:text-white'
          }
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {displayedTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
