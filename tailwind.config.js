/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepNavyBlue': '#001F3F', // primary color
        'gold': '#FFD700' // secondary color
      }
    },
  },
  plugins: [],
}