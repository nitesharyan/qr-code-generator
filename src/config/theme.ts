/**
 * ═══════════════════════════════════════════════════════════════
 *                    THEME CONFIGURATION
 * ═══════════════════════════════════════════════════════════════
 * 
 * 🎨 Change your app's default theme in ONE place!
 * 
 * ═══════════════════════════════════════════════════════════════
 */

export type Theme = 'light' | 'dark'

export const THEME_CONFIG = {
    /**
     * ┌─────────────────────────────────────────────────────────┐
     * │  🎯 DEFAULT THEME                                        │
     * │                                                          │
     * │  Change this to switch your app's default theme:        │
     * │  • 'light' → Light theme by default                     │
     * │  • 'dark'  → Dark theme by default                      │
     * │                                                          │
     * │  ⚠️  IMPORTANT: Also update index.html (line ~9)        │
     * └─────────────────────────────────────────────────────────┘
     */
    DEFAULT_THEME: 'light' as Theme,

    /**
     * ┌─────────────────────────────────────────────────────────┐
     * │  🖥️  SYSTEM PREFERENCE                                   │
     * │                                                          │
     * │  Respect user's system theme?                           │
     * │  • true  → Use system preference when available         │
     * │  • false → Always use DEFAULT_THEME                     │
     * └─────────────────────────────────────────────────────────┘
     */
    RESPECT_SYSTEM_PREFERENCE: true,

    /**
     * ┌─────────────────────────────────────────────────────────┐
     * │  💾 STORAGE KEY                                          │
     * │                                                          │
     * │  localStorage key for theme preference                  │
     * │  (Usually don't need to change this)                    │
     * └─────────────────────────────────────────────────────────┘
     */
    STORAGE_KEY: 'theme',
} as const

/**
 * ═══════════════════════════════════════════════════════════════
 *                    PRIORITY ORDER
 * ═══════════════════════════════════════════════════════════════
 * 
 * Theme is determined in this order:
 * 
 *   1️⃣  Saved preference (localStorage)      [Highest priority]
 *   2️⃣  System preference (if enabled)
 *   3️⃣  DEFAULT_THEME                         [Lowest priority]
 * 
 * ═══════════════════════════════════════════════════════════════
 */
