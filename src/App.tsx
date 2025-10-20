import React from 'react'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import QRGenerator from './components/QRGenerator'

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
