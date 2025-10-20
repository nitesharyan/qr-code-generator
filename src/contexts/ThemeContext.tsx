import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { THEME_CONFIG, Theme } from '../config/theme'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

const getInitialTheme = (): Theme => {
    // 1. Check localStorage first (highest priority)
    const savedTheme = localStorage.getItem(THEME_CONFIG.STORAGE_KEY) as Theme | null
    if (savedTheme) {
        return savedTheme
    }

    // 2. Check system preference (if enabled)
    if (THEME_CONFIG.RESPECT_SYSTEM_PREFERENCE) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (prefersDark) {
            return 'dark'
        }
    }

    // 3. Fallback to default theme from config
    return THEME_CONFIG.DEFAULT_THEME
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme)
        // Save to localStorage
        localStorage.setItem(THEME_CONFIG.STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = (): void => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
