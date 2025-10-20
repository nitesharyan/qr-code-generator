import React from 'react'
import './Footer.css'

function Footer(): React.ReactElement {
    const currentYear: number = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="/assets/react.svg" alt="React Logo" className="footer-logo" />
                <div className="footer-text">
                    <p>&copy; {currentYear} QR Code Generator. All rights reserved.</p>
                    <p className="footer-subtext">Built with React & Vite</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
