/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          black: '#000000',
          charcoal: '#121212',
        }
      }
    },
  },
  plugins: [],
}