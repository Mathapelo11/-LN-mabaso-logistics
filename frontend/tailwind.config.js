/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 // tailwind.config.js
extend: {
  colors: {
    // Primary Background: Pure or Off-White
    'brand-light': '#F8F9FA', 
    // Container Background: Pure White
    'brand-white': '#FFFFFF',
    // Luxury Accent: Gold from the brand profile
    'brand-gold': '#C5A059', 
    // High-Contrast Text: Deep Charcoal (not pure black)
    'brand-dark': '#000000',
    // Soft Borders
    'brand-border': '#E5E7EB',
  }
}
  },
  plugins: [],
}