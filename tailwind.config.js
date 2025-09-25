/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-oscuro': '#3c2415',
        'cafe-medio': '#8b4513',
        'cafe-claro': '#d2b48c',
      },
      fontFamily: {
        'titulo': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
