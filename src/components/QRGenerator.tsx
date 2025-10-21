import React, { useState } from 'react'
import './QRGenerator.css'
import { isValidUrl, formatUrl } from '../utils/urlValidator'
import { generateQRCode, downloadQRCode } from '../utils/qrCodeGenerator'
import { URL_PROTOCOLS, DEFAULT_FILENAMES, VALIDATION_MESSAGES } from '../constants'

/**
 * QR Generator Component
 *
 * Main component for QR code generation functionality
 * Handles URL input, validation, QR code generation, and download
 *
 * @returns {React.ReactElement} The QR generator interface with input and display sections
 */
function QRGenerator(): React.ReactElement {
    const [url, setUrl] = useState<string>('')
    const [qrCode, setQrCode] = useState<string>('')
    const [isGenerating, setIsGenerating] = useState<boolean>(false)
    const [imageLoading, setImageLoading] = useState<boolean>(false)

    /**
     * Handles QR code generation from user input
     *
     * Validates the URL, formats it if needed, and generates QR code
     * Shows appropriate error messages for invalid inputs
     *
     * @returns {Promise<void>}
     */
    const generateQRCodeHandler = async (): Promise<void> => {
        // Reset QR code first when button is clicked
        setQrCode('')
        setImageLoading(false)

        if (
            url.trim() === '' ||
            url.trim() === URL_PROTOCOLS.HTTPS ||
            url.trim() === URL_PROTOCOLS.HTTP
        ) {
            alert(VALIDATION_MESSAGES.EMPTY_URL)
            return
        }

        // Validate URL format
        if (!isValidUrl(url)) {
            alert(VALIDATION_MESSAGES.INVALID_URL_FORMAT)
            return
        }

        // Format the URL (add https:// if missing)
        const formattedUrl = formatUrl(url)

        try {
            setIsGenerating(true)
            setImageLoading(true)

            // Generate QR code locally using our own generator
            const qrCodeDataURL = await generateQRCode(formattedUrl)

            setQrCode(qrCodeDataURL)
        } catch (error) {
            console.error('Error generating QR code:', error)
            alert(VALIDATION_MESSAGES.QR_GENERATION_FAILED)
            setImageLoading(false)
        } finally {
            setIsGenerating(false)
        }
    }

    /**
     * Updates the URL state when user types in the input field
     *
     * Clears QR code if input is emptied
     *
     * @param {string} updatedUrl - The new URL value from input
     * @returns {void}
     */
    const setValues = (updatedUrl: string): void => {
        if (updatedUrl.trim() === '') {
            setQrCode('')
            setUrl('')
            setImageLoading(false)
            return
        }

        setUrl(updatedUrl)
        // Don't reset QR code while typing - only reset on button click
    }

    /**
     * Handles Enter key press in the input field
     *
     * Triggers QR code generation when Enter is pressed
     *
     * @param {React.KeyboardEvent<HTMLInputElement>} event - Keyboard event from input
     * @returns {void}
     */
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            generateQRCodeHandler()
        }
    }

    /**
     * Handles QR code download action
     *
     * Downloads the generated QR code as a PNG file
     *
     * @returns {void}
     */
    const handleDownload = (): void => {
        if (qrCode) {
            downloadQRCode(qrCode, DEFAULT_FILENAMES.QR_CODE)
        }
    }

    /**
     * Handles QR code image load event
     *
     * Sets loading state to false when image is loaded
     *
     * @returns {void}
     */
    const handleImageLoad = (): void => {
        setImageLoading(false)
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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setValues(event.target.value)
                        }
                        onKeyPress={handleKeyPress}
                        className="url-input"
                        disabled={isGenerating}
                        aria-label="Enter URL to generate QR code"
                    />
                    <button
                        onClick={generateQRCodeHandler}
                        className="generate-btn"
                        disabled={isGenerating}
                        aria-busy={isGenerating}
                    >
                        {isGenerating ? 'Generating...' : 'Generate QR Code'}
                    </button>
                </div>
            </div>

            {qrCode && (
                <div className="qr-output">
                    <h3>Your QR Code</h3>
                    <div className="qr-code-container">
                        {imageLoading && (
                            <div className="qr-loading">
                                <div className="spinner"></div>
                            </div>
                        )}
                        <img
                            src={qrCode}
                            alt="QR Code"
                            className="qr-code-image"
                            onLoad={handleImageLoad}
                            style={{ display: imageLoading ? 'none' : 'block' }}
                        />
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
