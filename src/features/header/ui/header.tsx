'use client'

import useThemeStore from '@shared/model/useThemeStore'
import { useEffect } from 'react'

export const Header = () => {
  const { theme, toggleTheme } = useThemeStore()

  // При изменении темы добавляем/удаляем класс `dark` на элемент `html`
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className='bg-white p-4 shadow-md dark:bg-gray-800'>
      <div className='container mx-auto flex items-center justify-between'>
        <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
          My Blog
        </h1>
        <button
          onClick={toggleTheme}
          className='rounded-lg bg-gray-200 p-2 text-gray-800 dark:bg-gray-700 dark:text-white'
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
