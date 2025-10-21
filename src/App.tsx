import React from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import QRGenerator from './components/QRGenerator'

/**
 * Main Application Component
 *
 * Root component that wraps the entire application with ThemeProvider
 * and renders the main layout structure (Header, Content, Footer)
 *
 * @returns {React.ReactElement} The main app component
 */
function App(): React.ReactElement {
    return (
        <ThemeProvider>
            <div className="app">
                <ThemeToggle />
                <Header />
                <main className="main-content">
                    <QRGenerator />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App
