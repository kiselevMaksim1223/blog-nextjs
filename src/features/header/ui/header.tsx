'use client'

import Link from 'next/link'

import classNames from 'classnames'

import useThemeStore from '@shared/model/useThemeStore'

type Props = {
  initialTheme: 'light' | 'dark'
}

export const Header = ({ initialTheme }: Props) => {
  const { theme, toggleTheme } = useThemeStore()

  const displayedTheme = theme || initialTheme

  return (
    <header
      className={classNames(
        'fixed z-10 h-18 w-full rounded-b-lg bg-white p-4 shadow-md',
        'dark:bg-gray-800'
      )}
    >
      <div
        className={
          'container mx-auto flex max-w-7xl items-center justify-between'
        }
      >
        <Link href={'/'}>
          <h1
            className={classNames(
              'text-xl font-bold text-gray-900',
              'dark:text-white'
            )}
          >
            My Blog
          </h1>
        </Link>
        <button
          className={
            'h-10 w-10 rounded-lg bg-gray-200 p-2 text-gray-800 hover:cursor-pointer dark:bg-gray-700 dark:text-white'
          }
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {displayedTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
