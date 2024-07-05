/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'global':["Montserrat",'cursive'],
        'typewriter':["Courier Prime", 'monospace']
      }
    },
  },
  plugins: [],
}

