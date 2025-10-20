import React from 'react'
import './Header.css'
import viteLogo from '/assets/vite.svg'

function Header(): React.ReactElement {
    return (
        <header className="header">
            <div className="header-content">
                <img src={viteLogo} alt="Logo" className="logo" />
                <h1>QR Code Generator</h1>
            </div>
        </header>
    )
}

export default Header
