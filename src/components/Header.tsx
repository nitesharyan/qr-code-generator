import React from 'react'
import './Header.css'
import viteLogo from '/assets/vite.svg'

/**
 * Header Component
 *
 * Displays the application header with logo and title
 * Fixed position header that stays visible while scrolling
 *
 * @returns {React.ReactElement} The header component with logo and title
 */
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
