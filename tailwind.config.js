/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#ffcd00",
        secondary:"#231f1e",
        tertiary:"#FF344F",
        bgColor:"#F7F9FD"
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.jpg')",
      }
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1366px',
      'xl': '1366px',
      '2xl': '1366px'
    }
  },
  plugins: [],
}