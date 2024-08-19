/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        mcdo: '#FFC72C',
      }
    },
  },
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}

