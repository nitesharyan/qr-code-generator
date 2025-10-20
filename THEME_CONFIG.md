# Theme Configuration Guide

## 📁 Location
`src/config/theme.ts`

---

## 🎨 How to Change Default Theme

### Quick Change (1 line):

Open `src/config/theme.ts` and change:

```typescript
DEFAULT_THEME: 'light'  // Change to 'dark'
```

Then update **ONE line** in `index.html` (line ~9):

```javascript
const DEFAULT_THEME = 'light' // Change to 'dark'
```

**That's it!** 🎉

---

## ⚙️ Configuration Options

### `DEFAULT_THEME`
- **Type:** `'light' | 'dark'`
- **Default:** `'light'`
- **Description:** The default theme when no preference is saved and system preference is not used

### `RESPECT_SYSTEM_PREFERENCE`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Whether to use the user's system theme preference
  - `true`: Uses system preference when available (recommended)
  - `false`: Always uses DEFAULT_THEME

### `STORAGE_KEY`
- **Type:** `string`
- **Default:** `'theme'`
- **Description:** localStorage key for storing theme preference

---

## 🔄 Theme Priority (Order)

The theme is determined in this order:

1. **Saved Preference** (localStorage) - Highest priority
2. **System Preference** (if `RESPECT_SYSTEM_PREFERENCE` is `true`)
3. **Default Theme** (from `DEFAULT_THEME`) - Lowest priority

---

## 📝 Examples

### Example 1: Always Start Dark
```typescript
DEFAULT_THEME: 'dark',
RESPECT_SYSTEM_PREFERENCE: false,
```
Result: Always dark unless user manually toggles

### Example 2: Respect System, Default Light
```typescript
DEFAULT_THEME: 'light',
RESPECT_SYSTEM_PREFERENCE: true,
```
Result: Uses system preference, falls back to light

### Example 3: Respect System, Default Dark
```typescript
DEFAULT_THEME: 'dark',
RESPECT_SYSTEM_PREFERENCE: true,
```
Result: Uses system preference, falls back to dark

---

## 🐛 Troubleshooting

### Theme flickers on load?
Make sure `index.html` has the same `DEFAULT_THEME` value (line ~9)

### Theme not persisting?
Check browser console for localStorage errors

### Wrong theme on first load?
Clear localStorage: `localStorage.clear()` in console

---

## 🚀 Quick Commands

```bash
# Test light theme
localStorage.setItem('theme', 'light')
location.reload()

# Test dark theme
localStorage.setItem('theme', 'dark')
location.reload()

# Clear saved preference (test default)
localStorage.removeItem('theme')
location.reload()
```
