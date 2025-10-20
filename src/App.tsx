import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import QRGenerator from './components/QRGenerator'

function App(): React.ReactElement {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <QRGenerator />
            </main>
            <Footer />
        </div>
    )
}

export default App
