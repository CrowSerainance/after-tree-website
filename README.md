# After Tree Dessert Cafe Website

A modern, responsive web application built with **React 18** and **Vite**, featuring smooth animations, interactive image galleries, and a mobile-first design. Showcases menu items, business information, and provides an elegant user experience optimized for performance.

**Tech Stack:** React | Vite | Tailwind CSS | Framer Motion | JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - The site will be available at `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── After Tree Main Menu October 2025.pdf  # Menu PDF file
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx      # Button component
│   │   │   ├── card.jsx        # Card components
│   │   │   └── input.jsx       # Input component
│   │   └── AfterTreeSite.jsx   # Main website component
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles (Tailwind)
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── tailwind.config.js          # Tailwind CSS configuration
```

## Features

- 🎨 Beautiful light green color scheme
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📄 PDF menu integration
- 🍰 Menu highlights section
- 📍 Visit us section with contact info
- 📧 Newsletter subscription form

## Adding a Logo Image

If you have a logo image, place it in the `public` folder and name it `logo.png`. The website will automatically use it. If the logo doesn't exist, it will gracefully fall back to the text "After Tree".

## PDF Menu

The PDF menu file is already set up in the `public` folder. Links throughout the site will open it in a new tab.

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Customization

You can customize colors, content, and styles by editing:
- `src/components/AfterTreeSite.jsx` - Main content
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles
