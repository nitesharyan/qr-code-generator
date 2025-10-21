/**
 * URL Validator Utility
 *
 * Provides functions for validating and formatting URLs
 * Uses multi-layer validation with regex patterns and URL constructor
 */

import { URL_PROTOCOLS } from '../constants'

/**
 * Validates if a given string is a valid URL format
 *
 * Performs multiple validation checks:
 * - Empty/incomplete check
 * - Regex pattern validation
 * - Domain structure validation
 * - URL constructor validation
 * - TLD verification
 *
 * @param {string} url - The URL string to validate
 * @returns {boolean} True if valid URL format, false otherwise
 *
 * @example
 * isValidUrl('google.com') // true
 * isValidUrl('https://example.com') // true
 * isValidUrl('invalid') // false
 */
export const isValidUrl = (url: string): boolean => {
    if (
        !url ||
        url.trim() === '' ||
        url.trim() === URL_PROTOCOLS.HTTPS ||
        url.trim() === URL_PROTOCOLS.HTTP
    ) {
        return false
    }

    // Regex pattern for URL validation
    // Matches: protocol (optional), domain with TLD, optional port, optional path/query/fragment
    const urlPattern = /^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:[0-9]{1,5})?(\/.*)?$/

    const trimmedUrl = url.trim()

    // Remove protocol for regex testing if present
    const urlWithoutProtocol = trimmedUrl.replace(/^https?:\/\//, '')

    // Check if URL matches pattern
    if (!urlPattern.test(trimmedUrl)) {
        return false
    }

    // Additional validation: Check if domain has at least one dot and valid TLD
    const domainPattern = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}/
    if (!domainPattern.test(urlWithoutProtocol.split('/')[0].split(':')[0])) {
        return false
    }

    // Try creating URL object for additional validation
    try {
        const urlToTest =
            trimmedUrl.startsWith(URL_PROTOCOLS.HTTP) ||
            trimmedUrl.startsWith(URL_PROTOCOLS.HTTPS)
                ? trimmedUrl
                : `${URL_PROTOCOLS.HTTPS}${trimmedUrl}`

        const urlObj = new URL(urlToTest)

        // Ensure hostname has at least one dot (e.g., example.com)
        if (!urlObj.hostname.includes('.')) {
            return false
        }

        // Ensure hostname has valid TLD (at least 2 characters after last dot)
        const hostnameParts = urlObj.hostname.split('.')
        const tld = hostnameParts[hostnameParts.length - 1]
        if (tld.length < 2) {
            return false
        }

        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
        return false
    }
}

/**
 * Formats a URL by adding https:// protocol if missing
 *
 * @param {string} url - The URL string to format
 * @returns {string} Formatted URL with protocol
 *
 * @example
 * formatUrl('google.com') // 'https://google.com'
 * formatUrl('https://example.com') // 'https://example.com'
 */
export const formatUrl = (url: string): string => {
    const trimmedUrl = url.trim()

    if (
        trimmedUrl.startsWith(URL_PROTOCOLS.HTTP) ||
        trimmedUrl.startsWith(URL_PROTOCOLS.HTTPS)
    ) {
        return trimmedUrl
    }

    return `${URL_PROTOCOLS.HTTPS}${trimmedUrl}`
}
