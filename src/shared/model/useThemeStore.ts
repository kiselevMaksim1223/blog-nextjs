import { create } from 'zustand'

interface ThemeState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const useThemeStore = create<ThemeState>(set => ({
  theme: 'light',
  toggleTheme: () =>
    set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', newTheme)
      return { theme: newTheme }
    })
}))

export default useThemeStore
