# 📋 Code Review & Guidelines

## 🎯 Code Quality Rating

**Overall Score: 8.5/10** ⭐⭐⭐⭐

*Reviewed by Claude AI Assistant*

---

## 📖 Code Standards

### **1. Naming Conventions**

```typescript
// Components: PascalCase
Header.tsx
Footer.tsx
QRGenerator.tsx

// Interfaces: I prefix
interface IThemeContextType {}
interface IQRCodeOptions {}

// Functions: camelCase
generateQRCode()
isValidUrl()

// Constants: UPPER_SNAKE_CASE
URL_PROTOCOLS
DEFAULT_FILENAMES

// CSS Classes: kebab-case
.qr-generator
.footer-content
```

---

### **2. Documentation Requirements**

**All functions MUST have JSDoc:**

```typescript
/**
 * Brief description of what the function does
 *
 * @param {Type} paramName - Parameter description
 * @returns {ReturnType} What it returns
 *
 * @example
 * functionName(param) // result
 */
```

**Components MUST have summary:**

```typescript
/**
 * Component Name
 *
 * What it does and its purpose
 *
 * @returns {React.ReactElement} Component description
 */
function ComponentName(): React.ReactElement {}
```

---

### **3. TypeScript Rules**

```typescript
// Always specify return types
function myFunction(): ReturnType {}

// Always type parameters
const handler = (event: React.ChangeEvent<HTMLInputElement>) => {}

// Use interfaces with I prefix
interface IMyInterface {}

// Use const assertions for config
export const CONFIG = {} as const
```

---

### **4. React Patterns**

```typescript
// State with explicit types
const [value, setValue] = useState<string>('')

// Event handlers with full types
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {}

// Props interface
interface IComponentProps {
    prop: string
}
```

---

### **5. File Organization**

```
src/
├── components/       # React components (.tsx + .css)
├── contexts/         # React contexts
├── hooks/            # Custom hooks
├── utils/            # Helper functions
├── config/           # Configuration files
├── constants/        # App constants
└── scripts/          # Build/utility scripts
```

---

### **6. Import Order**

```typescript
// 1. React imports
import React, { useState } from 'react'

// 2. Styles
import './Component.css'

// 3. Internal imports (utils, configs, etc.)
import { utilFunction } from '../utils/myUtil'
import { CONFIG } from '../config/myConfig'

// 4. Assets
import logo from '/assets/logo.svg'
```

---

### **7. CSS Standards**

```css
/* Use CSS variables for theming */
color: var(--text-primary);
background: var(--bg-secondary);

/* 4 spaces indentation */
.class {
    property: value;
}

/* Mobile-first or specific breakpoint */
@media (max-width: 768px) {
    /* Mobile styles */
}
```

---

### **8. Constants Usage**

```typescript
// ❌ Bad - Magic strings
if (url === 'https://') {}
alert('Please enter a URL')

// ✅ Good - Use constants
import { URL_PROTOCOLS, VALIDATION_MESSAGES } from '../constants'
if (url === URL_PROTOCOLS.HTTPS) {}
alert(VALIDATION_MESSAGES.EMPTY_URL)
```

---

### **9. Configuration Files**

**Single source of truth:**

```typescript
// src/config/theme.ts
export const THEME_CONFIG = {
    DEFAULT_THEME: 'light',
    // ...
}

// src/config/contact.ts
export const CONTACT_CONFIG = {
    name: 'Nitesh',
    email: 'niteshu130@gmail.com',
    // ...
}
```

**Usage:** Import and use, never hardcode values

---

### **10. Error Handling**

```typescript
try {
    // Risky operation
    const result = await riskyFunction()
} catch (error) {
    console.error('Descriptive error message:', error)
    alert('User-friendly error message')
}
```

---

### **11. Accessibility**

```tsx
// Add ARIA attributes
<input aria-label="Descriptive label" />
<button aria-busy={isLoading} />

// Add titles for tooltips
<a title="What happens on click" />

// Use semantic HTML
<main>, <header>, <footer>, <nav>
```

---

### **12. Performance**

```typescript
// ✅ Good - Only pass what's needed
<Component value={value} />

// ✅ Good - Memoize expensive calculations (if needed)
const result = useMemo(() => expensiveCalc(), [deps])

// ✅ Good - Use proper dependencies
useEffect(() => {}, [specificDeps])
```

---

## 🚫 What NOT to Do

```typescript
// ❌ Don't use 'any' type
const value: any = something

// ❌ Don't ignore TypeScript errors
// @ts-ignore

// ❌ Don't leave console.logs in user-facing code
console.log('test') // Remove or guard with if (import.meta.env.DEV)

// ❌ Don't use var
var x = 1 // Use const or let

// ❌ Don't forget return types
function myFunc() {} // Should be: function myFunc(): ReturnType {}

// ❌ Don't use inline styles (except ErrorBoundary fallback)
<div style={{ color: 'red' }} /> // Use CSS classes

// ❌ Don't duplicate code
// Use functions, loops, or configuration
```

---

## ✅ Best Practices Checklist

Before committing code, verify:

- [ ] All functions have JSDoc comments
- [ ] All interfaces have `I` prefix
- [ ] All return types specified
- [ ] No magic strings (use constants)
- [ ] CSS uses variables for theming
- [ ] Event handlers properly typed
- [ ] Code formatted with Prettier (4 spaces)
- [ ] No TypeScript errors (`npm run build`)
- [ ] No ESLint warnings (`npm run lint`)
- [ ] Tested in browser
- [ ] Mobile responsive checked

---

## 🛠️ Useful Commands

```bash
# Format code
npm run format

# Check types
npm run build

# Lint code
npm run lint

# Generate contact QR codes
npm run generate:contact-qr
```

---

## 📞 Questions?

If unsure about code standards:
1. Check existing code for patterns
2. Refer to this document
3. Ask in PR/issue

---

**Keep code clean, typed, and documented!** ✨
