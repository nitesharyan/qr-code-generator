import React from 'react'
import './Footer.css'
import reactLogo from '/assets/react.svg'
import emailQR from '/assets/email-qr.png'
import linkedinQR from '/assets/linkedin-qr.png'
import { CONTACT_CONFIG } from '../config/contact'

/**
 * Footer Component
 *
 * Displays application footer with copyright info and contact QR codes
 * Fixed position footer with React logo and contact information
 * Includes scannable QR codes for email and LinkedIn
 *
 * @returns {React.ReactElement} The footer component with info and contact QR codes
 */
function Footer(): React.ReactElement {
    const currentYear: number = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section - App Info */}
                <div className="footer-left">
                    <img src={reactLogo} alt="React Logo" className="footer-logo" />
                    <div className="footer-text">
                        <p>&copy; {currentYear} QR Code Generator</p>
                        <p className="footer-subtext">Built with React & Vite</p>
                    </div>
                </div>

                {/* Right Section - Contact QR Codes */}
                <div className="footer-contact">
                    <div className="contact-qr-group">
                        <a
                            href={CONTACT_CONFIG.emailHref}
                            className="qr-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Send me an email"
                            aria-label={`Email ${CONTACT_CONFIG.name}`}
                        >
                            <img src={emailQR} alt="Email QR Code" className="contact-qr" />
                            <span className="qr-label">📧 Email</span>
                        </a>
                        <a
                            href={CONTACT_CONFIG.linkedinHref}
                            className="qr-item"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Connect on LinkedIn"
                            aria-label={`Connect with ${CONTACT_CONFIG.name} on LinkedIn`}
                        >
                            <img src={linkedinQR} alt="LinkedIn QR Code" className="contact-qr" />
                            <span className="qr-label">💼 LinkedIn</span>
                        </a>
                    </div>
                    <p className="contact-heading">
                        Want to provide feedback? Connect with {CONTACT_CONFIG.name} ❤️
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
