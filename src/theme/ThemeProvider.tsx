import React, { createContext, useEffect, useState } from 'react'

export type IThemeMode = 'light' | 'dark'

interface IThemeContext {
  themeMode: IThemeMode
  onThemeChange: (mode: IThemeMode) => void
}

export const ThemeContext = createContext<IThemeContext>({
  themeMode: 'light',
  onThemeChange: () => {}
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setthemeMode] = useState<IThemeMode>('light')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setthemeMode(mediaQuery.matches ? 'dark' : 'light')
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        onThemeChange: (value) => {
          setthemeMode(value)
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
