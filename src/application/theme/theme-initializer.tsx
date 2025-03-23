'use client'

import { useLayoutEffect } from 'react'

import Cookies from 'js-cookie'

import useThemeStore from '@shared/model/useThemeStore'

export const ThemeInitializer = () => {
  const theme = useThemeStore(state => state.theme)
  const toggleTheme = useThemeStore(state => state.toggleTheme)

  useLayoutEffect(() => {
    const savedTheme = Cookies.get('theme') as 'light' | 'dark'

    if (savedTheme) {
      document.documentElement.classList.add(savedTheme)
      toggleTheme(savedTheme)
    } else {
      document.documentElement.classList.add(theme || 'light')
      toggleTheme(theme || 'light')
    }

    return () => {
      document.documentElement.classList.remove('light', 'dark')
    }
  }, [theme])

  return null
}
