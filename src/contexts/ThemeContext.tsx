import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { THEME_CONFIG, Theme } from '../config/theme'

/**
 * Theme Context Type
 *
 * Defines the shape of the theme context value
 */
interface IThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContextType | undefined>(undefined)

/**
 * Theme Provider Props
 *
 * Props for the ThemeProvider component
 */
interface IThemeProviderProps {
    children: ReactNode
}

/**
 * Gets the initial theme based on priority order
 *
 * Priority:
 * 1. Saved preference from localStorage
 * 2. System preference (if enabled in config)
 * 3. Default theme from config
 *
 * @returns {Theme} The determined initial theme
 */
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

/**
 * Theme Provider Component
 *
 * Provides theme state and toggle functionality to all child components
 * Manages theme persistence in localStorage and applies theme to document
 *
 * @param {IThemeProviderProps} props - Component props with children
 * @returns {React.ReactElement} Theme provider wrapper
 */
export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme)
        // Save to localStorage
        localStorage.setItem(THEME_CONFIG.STORAGE_KEY, theme)
    }, [theme])

    /**
     * Toggles between light and dark themes
     *
     * @returns {void}
     */
    const toggleTheme = (): void => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
