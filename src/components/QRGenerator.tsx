import React, { useState } from 'react'
import './QRGenerator.css'
import { isValidUrl, formatUrl } from '../utils/urlValidator'

function QRGenerator(): React.ReactElement {
    const [url, setUrl] = useState<string>('https://')
    const [qrCode, setQrCode] = useState<string>('')

    const generateQRCode = (): void => {
        // Reset QR code first when button is clicked
        setQrCode('')

        if (url.trim() === '' || url.trim() === 'https://' || url.trim() === 'http://') {
            alert('Please enter a URL')
            return
        }

        // Validate URL format
        if (!isValidUrl(url)) {
            alert(
                'Please enter a valid URL format (e.g., https://example.com or example.com)'
            )
            return
        }

        // Format the URL (add https:// if missing)
        const formattedUrl = formatUrl(url)

        // Using QR Code API to generate QR code
        const qrCodeUrl: string = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(formattedUrl)}`
        setQrCode(qrCodeUrl)
    }

    const setValues = (updatedUrl: string): void => {
        if (updatedUrl.trim() === '') {
            setQrCode('')
            setUrl('')
            return
        }

        setUrl(updatedUrl)
        // Don't reset QR code while typing - only reset on button click
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            generateQRCode()
        }
    }

    return (
        <div className="qr-generator">
            <div className="input-section">
                <h2>Enter URL to Generate QR Code</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setValues(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="url-input"
                    />
                    <button onClick={generateQRCode} className="generate-btn">
                        Generate QR Code
                    </button>
                </div>
            </div>

            {qrCode && (
                <div className="qr-output">
                    <h3>Your QR Code</h3>
                    <div className="qr-code-container">
                        <img src={qrCode} alt="QR Code" className="qr-code-image" />
                    </div>
                    <p className="qr-info">Scan this QR code to visit your URL</p>
                    <a href={qrCode} download="qrcode.png" className="download-btn">
                        Download QR Code
                    </a>
                </div>
            )}
        </div>
    )
}

export default QRGenerator
