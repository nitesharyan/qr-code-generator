/**
 * Contact QR Code Generator Script
 *
 * Generates static QR codes for all contact information defined in CONTACT_QR_DATA
 * Uses the qrCodeGenerator utility for consistency with the main app
 *
 * To add new contact QR:
 * 1. Add entry to CONTACT_QR_DATA in src/config/contact.ts
 * 2. Run: npm run generate:contact-qr
 * 3. QR codes auto-generated in public/assets/ as {key}-qr.png
 *
 * Usage: npm run generate:contact-qr
 */

import { generateQRCode, IQRCodeOptions } from '../utils/qrCodeGenerator'
import { CONTACT_QR_DATA } from '../config/contact'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Default QR code generation options for contact QR codes
 */
const QR_CODE_OPTIONS: IQRCodeOptions = {
    width: 120, // 2x for retina displays (displays at 60x60)
    margin: 1,
}

/**
 * Generates a single QR code and saves it to a file
 *
 * @param {string} name - Display name for the contact type (e.g., 'Email', 'LinkedIn')
 * @param {string} data - The data to encode in the QR code
 * @param {string} outputPath - File path where the QR code image will be saved
 * @returns {Promise<void>}
 */
async function generateSingleQR(name: string, data: string, outputPath: string): Promise<void> {
    const qrDataURL = await generateQRCode(data, QR_CODE_OPTIONS)
    const buffer = Buffer.from(qrDataURL.split(',')[1], 'base64')
    writeFileSync(outputPath, buffer)
    console.log(`✅ ${name} QR code generated: ${outputPath}`)
}

/**
 * Generates all contact QR codes based on CONTACT_QR_DATA configuration
 *
 * Loops through all entries in CONTACT_QR_DATA and generates a QR code for each
 * Saves all QR codes to public/assets/ directory
 *
 * @returns {Promise<void>}
 */
async function generateContactQRCodes(): Promise<void> {
    try {
        const assetsPath = join(__dirname, '../../public/assets')

        // Generate QR for each contact info entry
        const promises = Object.entries(CONTACT_QR_DATA).map(([key, value]) => {
            const filename = `${key}-qr.png`
            const outputPath = join(assetsPath, filename)
            const capitalizedName = key.toUpperCase()

            return generateSingleQR(capitalizedName, value, outputPath)
        })

        // Wait for all QR codes to be generated in parallel
        await Promise.all(promises)

        console.log('\n🎉 All contact QR codes generated successfully!')
    } catch (error) {
        console.error('❌ Error generating QR codes:', error)
        process.exit(1)
    }
}

// Execute the generation
generateContactQRCodes()
