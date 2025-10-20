import React, { useState } from 'react'
import './QRGenerator.css'
import { isValidUrl, formatUrl } from '../utils/urlValidator'
import { generateQRCode, downloadQRCode } from '../utils/qrCodeGenerator'

function QRGenerator(): React.ReactElement {
    const [url, setUrl] = useState<string>('https://')
    const [qrCode, setQrCode] = useState<string>('')
    const [isGenerating, setIsGenerating] = useState<boolean>(false)

    const generateQRCodeHandler = async (): Promise<void> => {
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

        try {
            setIsGenerating(true)

            // Generate QR code locally using our own generator
            const qrCodeDataURL = await generateQRCode(formattedUrl, {
                width: 300,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF',
                },
                errorCorrectionLevel: 'M',
            })

            setQrCode(qrCodeDataURL)
        } catch (error) {
            console.error('Error generating QR code:', error)
            alert('Failed to generate QR code. Please try again.')
        } finally {
            setIsGenerating(false)
        }
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
            generateQRCodeHandler()
        }
    }

    const handleDownload = (): void => {
        if (qrCode) {
            downloadQRCode(qrCode, 'qrcode.png')
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
                        disabled={isGenerating}
                    />
                    <button
                        onClick={generateQRCodeHandler}
                        className="generate-btn"
                        disabled={isGenerating}
                    >
                        {isGenerating ? 'Generating...' : 'Generate QR Code'}
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
                    <button onClick={handleDownload} className="download-btn">
                        Download QR Code
                    </button>
                </div>
            )}
        </div>
    )
}

export default QRGenerator
