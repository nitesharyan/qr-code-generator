/**
 * QR Code Generator Utility
 *
 * Provides functions for generating QR codes from text/URLs
 * Uses the 'qrcode' library for reliable QR code generation
 */

import QRCode from 'qrcode'

/**
 * QR Code Generation Options Interface
 *
 * Configuration options for QR code generation
 */
export interface IQRCodeOptions {
    width?: number
    margin?: number
    color?: {
        dark?: string
        light?: string
    }
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
}

/**
 * Generates a QR code as a data URL (base64 encoded PNG)
 *
 * Creates a QR code image from the provided text and returns it as a data URL
 * that can be used directly in an <img> src attribute
 *
 * @param {string} text - The text/URL to encode in the QR code
 * @param {IQRCodeOptions} [options] - Optional QR code generation options
 * @returns {Promise<string>} Data URL of the generated QR code image
 * @throws {Error} If QR code generation fails
 *
 * @example
 * const qrDataURL = await generateQRCode('https://example.com')
 * <img src={qrDataURL} alt="QR Code" />
 */
export const generateQRCode = async (
    text: string,
    options?: IQRCodeOptions
): Promise<string> => {
    try {
        const defaultOptions: IQRCodeOptions = {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF',
            },
            errorCorrectionLevel: 'M',
            ...options,
        }

        // Generate QR code as data URL
        const qrCodeDataURL = await QRCode.toDataURL(text, defaultOptions)
        return qrCodeDataURL
    } catch (error) {
        console.error('Error generating QR code:', error)
        throw new Error('Failed to generate QR code')
    }
}

/**
 * Generates a QR code directly onto an HTML canvas element
 *
 * Draws the QR code on the provided canvas for direct manipulation
 * or when canvas-based rendering is preferred
 *
 * @param {string} text - The text/URL to encode in the QR code
 * @param {HTMLCanvasElement} canvas - HTML canvas element to draw on
 * @param {IQRCodeOptions} [options] - Optional QR code generation options
 * @returns {Promise<void>}
 * @throws {Error} If QR code generation fails
 *
 * @example
 * const canvas = canvasRef.current
 * await generateQRCodeToCanvas('https://example.com', canvas)
 */
export const generateQRCodeToCanvas = async (
    text: string,
    canvas: HTMLCanvasElement,
    options?: IQRCodeOptions
): Promise<void> => {
    try {
        const defaultOptions: IQRCodeOptions = {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF',
            },
            errorCorrectionLevel: 'M',
            ...options,
        }

        await QRCode.toCanvas(canvas, text, defaultOptions)
    } catch (error) {
        console.error('Error generating QR code to canvas:', error)
        throw new Error('Failed to generate QR code')
    }
}

/**
 * Downloads a QR code image to the user's device
 *
 * Creates a temporary link element and triggers download of the QR code
 * as a PNG file with the specified filename
 *
 * @param {string} dataURL - Data URL of the QR code image
 * @param {string} [filename='qrcode.png'] - Name of the file to download
 * @returns {void}
 *
 * @example
 * downloadQRCode(qrDataURL, 'my-qr-code.png')
 */
export const downloadQRCode = (dataURL: string, filename: string = 'qrcode.png'): void => {
    const link = document.createElement('a')
    link.href = dataURL
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
