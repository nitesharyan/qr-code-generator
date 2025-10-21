import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

/**
 * Custom hook to access theme context
 *
 * Provides easy access to theme state and toggle function
 * Throws error if used outside ThemeProvider
 *
 * @throws {Error} If used outside of ThemeProvider
 * @returns {IThemeContextType} Theme context value with theme and toggleTheme
 *
 * @example
 * const { theme, toggleTheme } = useTheme()
 */
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
