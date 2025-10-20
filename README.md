# 🎯 QR Code Generator

A modern, responsive QR Code Generator built with React, TypeScript, and Vite. Generate QR codes from URLs with a beautiful, user-friendly interface and instant validation.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Screenshots

<!-- Add screenshots here -->
_Screenshots will be added soon_

---

## ✨ Features

- ✅ **Smart URL Validation** - Multi-layer validation using regex patterns and URL constructor
- ✅ **Auto-format URLs** - Automatically adds `https://` protocol if missing
- ✅ **Instant QR Generation** - Generate QR codes in real-time from valid URLs
- ✅ **Download QR Codes** - Save generated QR codes as PNG images
- ✅ **Responsive Design** - Fully optimized for mobile (768px breakpoint) and desktop
- ✅ **Dark Theme** - Modern dark UI with gradient effects
- ✅ **Real-time Feedback** - Instant validation feedback with error messages
- ✅ **TypeScript Powered** - Fully typed codebase for better development experience
- ✅ **Fast Development** - Lightning-fast HMR with Vite
- ✅ **Code Quality** - ESLint + Prettier for consistent code formatting

---

## 🎨 What to Expect from the UI

### 🎯 User Interface Overview

#### **Header**
- Beautiful purple gradient header spanning full width
- Vite logo on the left
- "QR Code Generator" title centered
- Fixed position - stays visible while scrolling
- Responsive: Scales down on mobile devices

#### **Main Content Area**

**Input Section:**
- Clean, semi-transparent dark panel
- "Enter URL to Generate QR Code" heading
- URL input field (pre-filled with `https://`)
- Purple gradient "Generate QR Code" button
- Supports **Enter key** to generate
- Full-width layout on mobile for easy touch interaction

**QR Code Display Section** _(appears after generation)_:
- Smooth fade-in animation
- "Your QR Code" heading
- White container with generated QR code
- Info text: "Scan this QR code to visit your URL"
- Green gradient "Download QR Code" button
- Fully responsive image that scales on mobile

#### **Footer**
- Fixed at bottom with dark background
- Animated spinning React logo
- Copyright text with current year (© 2025)
- "Built with React & Vite" subtext
- Responsive: Stacks vertically on mobile

### 🎨 Design Highlights

- 🌈 **Purple & Green Gradients** - Modern gradient buttons with hover effects
- ✨ **Smooth Animations** - Fade-in effects and hover transformations
- 📱 **Mobile Optimized** - Touch-friendly buttons and responsive layouts
- 🌙 **Dark Theme** - Easy on the eyes with semi-transparent glassmorphism
- 🎭 **Interactive** - Hover effects, active states, and smooth transitions

---

## 🔄 Application Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER OPENS APP                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    HEADER (Always Visible)                       │
│  ┌──────────┐                                                    │
│  │ Vite Logo │  QR Code Generator                               │
│  └──────────┘                                                    │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       INPUT SECTION                              │
│                                                                   │
│  Enter URL to Generate QR Code                                  │
│  ┌───────────────────────────────────────────────────┐          │
│  │  https://                                         │          │
│  └───────────────────────────────────────────────────┘          │
│                 [Generate QR Code Button]                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
                    User Enters URL
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    VALIDATION PROCESS                            │
│                                                                   │
│  Step 1: Check if empty                                         │
│          ├─ Yes → Show Alert: "Please enter a URL"             │
│          └─ No → Continue                                       │
│                                                                   │
│  Step 2: Regex Pattern Validation                              │
│          ├─ Check domain structure                              │
│          ├─ Validate TLD (min 2 chars)                         │
│          ├─ Check for valid characters                          │
│          └─ Invalid → Show Alert: "Please enter valid format"  │
│                                                                   │
│  Step 3: URL Constructor Validation                            │
│          ├─ Try creating URL object                             │
│          ├─ Check protocol (http/https)                        │
│          ├─ Validate hostname structure                         │
│          └─ Invalid → Show Alert                               │
│                                                                   │
│  Step 4: Format URL (if needed)                                │
│          ├─ Has protocol? → Use as-is                          │
│          └─ No protocol? → Add "https://"                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    ✅ Valid URL
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  QR CODE GENERATION                              │
│                                                                   │
│  1. Reset previous QR code (if any)                            │
│  2. Format URL with protocol                                    │
│  3. Encode URL for API                                          │
│  4. Call QR Server API:                                         │
│     https://api.qrserver.com/v1/create-qr-code/                │
│     ?size=300x300&data=<encoded-url>                           │
│  5. Receive QR code image URL                                   │
│  6. Display QR code with fade-in animation                      │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    QR CODE DISPLAY                               │
│                                                                   │
│  Your QR Code                                                   │
│  ┌─────────────────────────────────────┐                       │
│  │  ██████    ██  ████    ██    ██████  │                       │
│  │  ██  ██  ██████  ██  ████    ██  ██  │                       │
│  │  ██  ██    ██  ██    ██  ██  ██  ██  │                       │
│  │  ██████  ██  ██    ████  ██  ██████  │                       │
│  │    ██  ████    ██████      ██    ██  │                       │
│  │  ██  ████  ██████  ██    ██████  ██  │                       │
│  │  ██████    ██  ████    ██    ██████  │                       │
│  └─────────────────────────────────────┘                       │
│                                                                   │
│  Scan this QR code to visit your URL                           │
│                                                                   │
│  User Options:                                                  │
│  ├─ Scan with mobile device → Redirect to URL                  │
│  ├─ Click Download → Save as PNG                               │
│  └─ Modify URL → QR stays until regenerated                    │
│                                                                   │
│            [Download QR Code Button]                            │
└─────────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FOOTER (Always Visible)                       │
│                                                                   │
│              ⚛️  (Spinning React Logo)                          │
│     © 2025 QR Code Generator. All rights reserved.             │
│            Built with React & Vite                              │
└─────────────────────────────────────────────────────────────────┘

Legend:
  → Flow direction
  ├─ Decision branch
  └─ End of branch
  ✅ Success state
  ❌ Error state
```

### 📝 User Journey Examples

**Example 1: Valid URL with Protocol**
```
User Input: https://google.com
    ↓
Validation: ✅ Pass (has protocol, valid domain, valid TLD)
    ↓
Format: https://google.com (no change needed)
    ↓
Generate: QR Code created
    ↓
Display: QR Code shown with download option
```

**Example 2: Valid URL without Protocol**
```
User Input: github.com
    ↓
Validation: ✅ Pass (valid domain, valid TLD)
    ↓
Format: https://github.com (auto-add protocol)
    ↓
Generate: QR Code created
    ↓
Display: QR Code shown with download option
```

**Example 3: Invalid URL**
```
User Input: https://ww
    ↓
Validation: ❌ Fail (no TLD, incomplete domain)
    ↓
Alert: "Please enter a valid URL format"
    ↓
QR Code: Previous QR cleared, no new QR generated
```

**Example 4: Empty Input**
```
User Input: (empty or just "https://")
    ↓
Validation: ❌ Fail (empty input)
    ↓
Alert: "Please enter a URL"
    ↓
QR Code: Cleared/Not generated
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

- **Node.js**: Version **20.19+** or **22.12+** (Required by Vite 7.x)
- **npm**: Version **8.0+** (Comes with Node.js)
- **nvm** (Optional but recommended): For managing multiple Node.js versions

### Why These Versions?

Vite 7.x requires Node.js 20.19+ or 22.12+ for optimal performance and modern JavaScript features.

### Check Your Current Versions

```bash
# Check Node.js version
node --version
# Should output: v20.x.x or v22.x.x

# Check npm version
npm --version
# Should output: 8.x.x or higher
```

### Upgrading Node.js

If you need to upgrade Node.js, we recommend using **nvm** (Node Version Manager):

#### Install nvm (if not already installed)

**Windows:**
Download from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

**macOS/Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

#### Use nvm to install and manage Node.js

```bash
# Install Node.js 20 (LTS - Recommended)
nvm install 20
nvm use 20

# OR install Node.js 22 (Latest)
nvm install 22
nvm use 22

# Set default version (so it persists across terminal sessions)
nvm alias default 20

# Verify installation
node --version
```

#### Create .nvmrc for This Project

The project includes a `.nvmrc` file with the recommended Node version:
```bash
# When you enter the project directory, just run:
nvm use
```

---

## 🚀 Installation & Setup

Follow these steps to get the project running on your local machine:

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd qr-code-generator
```

### Step 2: Verify Node.js Version

```bash
node --version
```

Ensure it shows **v20.19+** or **v22.12+**. If not, use `nvm` to switch:

```bash
nvm use 20
# or
nvm use 22
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 19.1.1
- React DOM 19.1.1
- TypeScript 5.6.3
- Vite 7.1.7
- ESLint & Prettier
- All type definitions (@types/react, @types/react-dom)

**Expected output:**
```
added 234 packages, and audited 235 packages in 15s
```

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v7.1.7  ready in 187 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 5: Open in Browser

Navigate to **http://localhost:5173** in your web browser.

You should see the QR Code Generator app running! 🎉

### Step 6: Verify Everything Works

1. Enter a URL (e.g., `google.com`)
2. Click "Generate QR Code" or press Enter
3. QR code should appear
4. Try downloading the QR code

---

## 📦 Available Scripts

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run dev` | Start development server with HMR | Daily development |
| `npm run build` | Build optimized production bundle | Before deployment |
| `npm run preview` | Preview production build locally | Test build before deploy |
| `npm run lint` | Run ESLint to check code quality | Before committing code |
| `npm run format` | Format all files with Prettier | Clean up code formatting |
| `npm run format:check` | Check if files are properly formatted | CI/CD pipeline |

### Script Details

#### Development
```bash
npm run dev
```
- Starts Vite dev server on `http://localhost:5173`
- Enables Hot Module Replacement (HMR)
- Shows compilation errors in terminal and browser
- Auto-reloads on file changes

#### Production Build
```bash
npm run build
```
- Runs TypeScript compiler to check types
- Bundles all code with Vite/Rollup
- Minifies JavaScript and CSS
- Optimizes assets
- Creates `/dist` folder with production files

#### Preview Build
```bash
npm run preview
```
- Serves the production build locally
- Use this to test the built app before deployment
- Runs on `http://localhost:4173` by default

#### Code Quality
```bash
# Check for code issues
npm run lint

# Auto-fix code formatting
npm run format

# Check formatting without changes
npm run format:check
```

---

## 🛠️ Tech Stack & Why We Chose It

### Core Technologies

| Technology | Version | Purpose | Why? |
|------------|---------|---------|------|
| **React** | 19.1.1 | UI Framework | Component-based, declarative, huge ecosystem |
| **TypeScript** | 5.6.3 | Programming Language | Type safety, better IDE support, fewer bugs |
| **Vite** | 7.1.7 | Build Tool & Dev Server | ⚡ Lightning fast HMR, simple config, modern |
| **CSS3** | - | Styling | Native, no extra dependencies, full control |

### Development Tools

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **ESLint** | Code linting & quality | `eslint.config.js` |
| **Prettier** | Code formatting | `.prettierrc` (4 spaces, no semicolons) |
| **TypeScript** | Type checking | `tsconfig.json` |

### External APIs

| API | Purpose | Why? |
|-----|---------|------|
| **QR Server API** | QR Code generation | Free, reliable, no authentication needed |

### Why Vite Over Webpack?

#### ⚡ Speed Comparison

| Metric | Vite | Webpack (CRA) |
|--------|------|---------------|
| Dev Server Start | ~200ms | ~5-15s |
| HMR Update | <100ms | 1-3s |
| Production Build | Fast (esbuild) | Slower (Babel) |

#### 🎯 Key Benefits of Vite

1. **Instant Server Start**
   - Webpack bundles everything first (~10s wait)
   - Vite starts immediately, serves on-demand (~200ms)

2. **Lightning-Fast HMR**
   - See changes in <100ms
   - No full page reload needed
   - Better developer experience

3. **Simple Configuration**
   - 5-line config vs 100+ lines for Webpack
   - Works out-of-the-box for React + TypeScript

4. **Modern & Future-Proof**
   - Uses native ES modules
   - Leverages modern browser features
   - Industry standard for new projects (2024-2025)

5. **Better Build Performance**
   - Uses esbuild (written in Go) - 10-100x faster than JavaScript-based tools
   - Optimized production bundles with Rollup

---

## 📁 Project Structure

```
qr-code-generator/
│
├── public/                      # Static assets (served as-is)
│   └── assets/
│       ├── vite.svg            # Vite logo (header)
│       └── react.svg           # React logo (footer)
│
├── src/                         # Source code
│   ├── components/              # React components
│   │   ├── Header.tsx          # Header component with logo
│   │   ├── Header.css          # Header styles
│   │   ├── Footer.tsx          # Footer with copyright
│   │   ├── Footer.css          # Footer styles
│   │   ├── QRGenerator.tsx     # Main QR generator logic
│   │   └── QRGenerator.css     # QR generator styles
│   │
│   ├── utils/                   # Helper utilities
│   │   └── urlValidator.ts     # URL validation functions
│   │
│   ├── App.tsx                  # Main App component
│   ├── App.css                  # App-level styles
│   ├── main.tsx                 # Application entry point
│   ├── index.css                # Global styles
│   └── vite-env.d.ts           # TypeScript declarations
│
├── .vscode/                     # VS Code workspace settings
│   ├── settings.json           # Editor settings (format on save)
│   └── extensions.json         # Recommended extensions
│
├── .prettierrc                  # Prettier configuration
├── .prettierignore             # Files to ignore for Prettier
├── tsconfig.json               # TypeScript main config
├── tsconfig.app.json           # TypeScript app config
├── tsconfig.node.json          # TypeScript node config
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies & scripts
├── package-lock.json           # Locked dependency versions
├── .nvmrc                      # Node version specification
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

### Key Files Explained

#### Configuration Files

**`vite.config.js`**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()], // Enable React support
})
```

**`.prettierrc`**
```json
{
    "semi": false,           // No semicolons
    "singleQuote": true,     // Use single quotes
    "tabWidth": 4,           // 4 spaces for indentation
    "printWidth": 100        // 100 character line width
}
```

**`tsconfig.json`**
- Main TypeScript configuration
- References app and node configs
- Enables strict type checking

**`.nvmrc`**
```
20
```
Specifies Node.js version 20 for this project

#### Source Files

**`src/main.tsx`** - Entry point
- Imports React and App component
- Mounts app to DOM
- Wraps in StrictMode

**`src/App.tsx`** - Root component
- Imports Header, Footer, QRGenerator
- Defines layout structure

**`src/utils/urlValidator.ts`** - Validation logic
- `isValidUrl()` - Multi-layer URL validation
- `formatUrl()` - Adds protocol if missing

---

## 🎯 Usage Guide

### Basic Usage

1. **Open the application** in your browser (`http://localhost:5173`)

2. **Enter a URL** in the input field:
   - With protocol: `https://example.com`
   - Without protocol: `example.com` (auto-adds `https://`)

3. **Generate QR Code**:
   - Click "Generate QR Code" button, OR
   - Press **Enter** key

4. **View your QR Code**:
   - QR code appears with smooth animation
   - Info text shows the URL

5. **Download QR Code** (optional):
   - Click "Download QR Code" button
   - Saves as `qrcode.png` to your downloads folder

### URL Validation Rules

The application validates URLs using multiple layers:

#### ✅ Valid URL Formats

```
✓ https://google.com
✓ http://example.com
✓ example.com               → Auto-converts to https://example.com
✓ subdomain.example.com
✓ example.co.uk
✓ example.com/path
✓ example.com:8080
✓ example.com/path?query=value
```

#### ❌ Invalid URL Formats

```
✗ https://ww               → No TLD
✗ https://                  → Empty domain
✗ example                   → No TLD
✗ https://test              → No TLD
✗ not a url                 → Invalid format
✗ 192.168.1.1              → IP addresses not supported (can be added)
```

### Validation Process

**Step 1: Empty Check**
- Checks if input is empty or just protocol (`https://`)
- **Error**: "Please enter a URL"

**Step 2: Regex Pattern Validation**
```regex
/^(https?:\/\/)?(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:[0-9]{1,5})?(\/.*)?$/
```
- Validates domain structure
- Ensures TLD is at least 2 characters
- Checks for valid characters
- **Error**: "Please enter a valid URL format"

**Step 3: URL Constructor Validation**
- Attempts to create URL object
- Validates protocol (http/https only)
- Checks hostname structure
- Ensures TLD exists after last dot

**Step 4: Format URL**
- Adds `https://` if no protocol present
- Returns formatted URL for QR generation

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Enter** | Generate QR Code (when input is focused) |
| **Ctrl + S** | Auto-format code (in VS Code) |

### Mobile Usage

On mobile devices (width ≤ 768px):
- Input and button stack vertically
- Full-width for easy tapping
- QR code scales to fit screen
- Download button is full-width

---

## ⚙️ Development Setup

### VS Code Extensions (Recommended)

The project recommends these extensions (auto-suggested when you open the folder):

| Extension | Purpose | Identifier |
|-----------|---------|------------|
| **Prettier** | Auto-format code on save | `esbenp.prettier-vscode` |
| **ESLint** | Lint code and catch errors | `dbaeumer.vscode-eslint` |
| **Tailwind CSS** | CSS IntelliSense (optional) | `bradlc.vscode-tailwindcss` |

### Auto-Format on Save

The project is configured to auto-format on save (Ctrl+S):

**Settings configured in `.vscode/settings.json`:**
```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 4
}
```

### Code Formatting Rules

- **Indentation**: 4 spaces
- **Quotes**: Single quotes for JS/TS
- **Semicolons**: Disabled
- **Line Width**: 100 characters
- **Trailing Commas**: ES5 style

### Manual Formatting

```bash
# Format all files
npm run format

# Check formatting without changing
npm run format:check
```

---

## 📱 Responsive Design (Mobile Support)

### Breakpoint: 768px

The application is **fully responsive** at the **768px breakpoint**.

#### Desktop (> 768px)
- Header: Full padding, large logo (50px), large title (2rem)
- Content: Horizontal input/button layout
- Footer: Horizontal logo/text layout
- QR Code: Max 300px

#### Mobile (≤ 768px)
- Header: Reduced padding, smaller logo (40px), smaller title (1.5rem)
- Content: Vertical stacking, full-width input/button
- Footer: Vertical stacking, smaller logo (35px)
- QR Code: Max 100% width, scales to fit screen

### Mobile Optimizations

1. **Touch-Friendly Buttons**
   - Larger tap targets (0.875rem padding)
   - Full-width buttons for easy tapping

2. **Responsive Images**
   - QR code scales to screen width
   - Never overflows container

3. **Optimized Spacing**
   - Reduced padding to maximize content area
   - Adjusted header/footer heights

4. **Readable Text**
   - Font sizes scale down appropriately
   - Maintains readability on small screens

### Testing Responsive Design

**Using Chrome DevTools:**
1. Press **F12** to open DevTools
2. Click **Toggle Device Toolbar** (Ctrl+Shift+M)
3. Select a device or set custom width
4. Test at 768px and below

**Recommended test widths:**
- 768px (Tablet)
- 375px (iPhone SE)
- 414px (iPhone Pro Max)
- 360px (Android)

---

## 🚢 Building for Production

### Create Production Build

```bash
npm run build
```

**What happens:**
1. TypeScript compilation and type-checking
2. Code bundling with Vite/Rollup
3. Minification of JS/CSS
4. Asset optimization
5. Output to `/dist` folder

### Preview Production Build

```bash
npm run preview
```
Opens production build at `http://localhost:4173`

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js      # Main JavaScript bundle
│   ├── index-[hash].css     # Compiled CSS
│   ├── vite.svg             # Vite logo
│   └── react.svg            # React logo
├── index.html               # Entry HTML file
└── ...
```

### Deployment

The `/dist` folder can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop `/dist` folder
- **GitHub Pages**: Push `/dist` to gh-pages branch
- **AWS S3**: Upload `/dist` contents
- **Firebase Hosting**: `firebase deploy`

---

## 🧪 Testing

### Manual Testing Checklist

#### URL Validation Testing

- [ ] Empty input shows error
- [ ] `https://` alone shows error
- [ ] `example` (no TLD) shows error
- [ ] `https://ww` (incomplete) shows error
- [ ] `google.com` generates QR code
- [ ] `https://google.com` generates QR code
- [ ] `subdomain.example.com` generates QR code

#### QR Code Testing

- [ ] QR code displays after valid input
- [ ] QR code clears on invalid input
- [ ] Download button works
- [ ] Scanning QR redirects to URL
- [ ] Multiple URLs can be generated in sequence

#### Responsive Testing

- [ ] Layout works at 768px width
- [ ] Layout works at 375px width (mobile)
- [ ] Buttons are full-width on mobile
- [ ] QR code fits screen on mobile
- [ ] No horizontal scrolling

#### Keyboard Testing

- [ ] Enter key generates QR code
- [ ] Tab navigation works
- [ ] Input focus states visible

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test your changes
4. **Format code**
   ```bash
   npm run format
   ```
5. **Commit changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines

- **4 spaces** for indentation
- **Single quotes** for strings
- **No semicolons**
- **Descriptive variable names**
- **Add JSDoc comments** for functions
- **Type everything** in TypeScript

---

## 🐛 Troubleshooting

### Common Issues

#### Issue: "command not found: npm"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

#### Issue: "Vite requires Node.js version 20.19+ or 22.12+"
**Solution**: 
```bash
nvm install 20
nvm use 20
```

#### Issue: Port 5173 already in use
**Solution**:
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5173 | xargs kill -9
```

#### Issue: "Cannot find module" errors
**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Prettier not working
**Solution**:
1. Install Prettier extension in VS Code
2. Reload VS Code window
3. Check `.vscode/settings.json` exists

#### Issue: QR code not generating
**Solution**:
1. Check browser console for errors (F12)
2. Verify internet connection (uses external API)
3. Try different URL format

---

## 📚 Learn More

### Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Useful Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite vs Webpack](https://vitejs.dev/guide/why.html)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Opera | Latest | ✅ Full |

**Note**: Modern browsers with ES2020 support required

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 QR Code Generator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- **QR Server API** for providing free QR code generation
- **Vite Team** for the amazing build tool
- **React Team** for the incredible framework
- **TypeScript Team** for type safety
- **Open Source Community** for inspiration and support

---

## 📞 Support

If you have any questions or need help:

1. **Check the [Troubleshooting](#-troubleshooting) section**
2. **Open an issue** on GitHub
3. **Read the documentation** linked above

---

## ⭐ Star This Project

If you found this project helpful, please consider giving it a star on GitHub! ⭐

---

**Built with ❤️ using React, TypeScript & Vite**

© 2025 QR Code Generator. All rights reserved.
