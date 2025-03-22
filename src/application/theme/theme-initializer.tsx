'use client'

import useThemeStore from '@shared/model/useThemeStore'
import { useEffect } from 'react'

export const ThemeInitializer = () => {
  const { theme } = useThemeStore()

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [theme])

  return null
}
