import Cookies from 'js-cookie'
import { create } from 'zustand'

interface ThemeState {
  theme: 'light' | 'dark' | null
  toggleTheme: (theme: 'light' | 'dark') => void
}

const useThemeStore = create<ThemeState>(set => ({
  theme: null,
  toggleTheme: (theme: 'light' | 'dark') =>
    set(() => {
      Cookies.set('theme', theme)
      return { theme }
    })
}))

export default useThemeStore
