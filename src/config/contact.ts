/**
 * Contact Configuration
 *
 * Centralized contact information used across the application
 * Single source of truth for all contact details
 */

/**
 * Contact Information Interface
 */
export interface IContactConfig {
    name: string
    email: string
    emailHref: string
    linkedin: string
    linkedinHref: string
}

/**
 * Contact Configuration
 *
 * Update contact details here - changes reflect everywhere automatically
 */
export const CONTACT_CONFIG: IContactConfig = {
    name: 'Nitesh',
    email: 'niteshu130@gmail.com',
    emailHref: 'mailto:niteshu130@gmail.com',
    linkedin: 'nitesh-5663',
    linkedinHref: 'https://www.linkedin.com/in/nitesh-5663',
} as const

/**
 * Contact QR Code Data
 *
 * Data to be encoded in QR codes for contact information
 * Used by generateContactQR script
 */
export const CONTACT_QR_DATA = {
    email: CONTACT_CONFIG.emailHref,
    linkedin: CONTACT_CONFIG.linkedinHref,
} as const
