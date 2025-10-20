/**
 * Validates if a given string is a valid URL format using regex
 * @param url - The URL string to validate
 * @returns boolean - True if valid URL format, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
    if (!url || url.trim() === '' || url.trim() === 'https://' || url.trim() === 'http://') {
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
            trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')
                ? trimmedUrl
                : `https://${trimmedUrl}`

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
 * Formats a URL by adding https:// if no protocol is present
 * @param url - The URL string to format
 * @returns string - Formatted URL with protocol
 */
export const formatUrl = (url: string): string => {
    const trimmedUrl = url.trim()

    if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
        return trimmedUrl
    }

    return `https://${trimmedUrl}`
}
