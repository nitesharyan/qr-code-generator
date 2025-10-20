import QRCode from 'qrcode'

/**
 * QR Code generation options
 */
export interface QRCodeOptions {
    width?: number
    margin?: number
    color?: {
        dark?: string
        light?: string
    }
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
}

/**
 * Generates a QR code as a data URL
 * @param text - The text/URL to encode in the QR code
 * @param options - QR code generation options
 * @returns Promise<string> - Data URL of the generated QR code image
 */
export const generateQRCode = async (
    text: string,
    options?: QRCodeOptions
): Promise<string> => {
    try {
        const defaultOptions: QRCodeOptions = {
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
 * Generates a QR code as a canvas element
 * @param text - The text/URL to encode in the QR code
 * @param canvas - HTML canvas element to draw on
 * @param options - QR code generation options
 */
export const generateQRCodeToCanvas = async (
    text: string,
    canvas: HTMLCanvasElement,
    options?: QRCodeOptions
): Promise<void> => {
    try {
        const defaultOptions: QRCodeOptions = {
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
 * Downloads the QR code as a PNG file
 * @param dataURL - Data URL of the QR code image
 * @param filename - Name of the file to download
 */
export const downloadQRCode = (dataURL: string, filename: string = 'qrcode.png'): void => {
    const link = document.createElement('a')
    link.href = dataURL
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
