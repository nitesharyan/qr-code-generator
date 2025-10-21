/**
 * Application Constants
 *
 * Centralized constants used throughout the application
 * Prevents magic strings and improves maintainability
 */

/**
 * URL Protocol Constants
 */
export const URL_PROTOCOLS = {
    HTTPS: 'https://',
    HTTP: 'http://',
} as const

/**
 * Default Filenames
 */
export const DEFAULT_FILENAMES = {
    QR_CODE: 'qrcode.png',
} as const

/**
 * Validation Messages
 */
export const VALIDATION_MESSAGES = {
    EMPTY_URL: 'Please enter a URL',
    INVALID_URL_FORMAT:
        'Please enter a valid URL format (e.g., https://example.com or example.com)',
    QR_GENERATION_FAILED: 'Failed to generate QR code. Please try again.',
} as const
