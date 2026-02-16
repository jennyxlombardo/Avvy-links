/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        avvy: {
          dark: '#050810',      // Background deep black/navy
          card: '#0D121F',      // Darker card background
          teal: '#2DD4BF',      // Teal accent for location dots
          slate: '#94A3B8'      // Dimmed text
        }
      }
    },
  },
  plugins: [],
}