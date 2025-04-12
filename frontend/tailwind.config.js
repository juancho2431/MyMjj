/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED1C24',
        primaryLight: '#F7A8A1',
        primaryDark: '#A50000',
        greyLight: '#DADADA',
        greyDark: '#555555',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        headline: ['"Teko"', 'sans-serif'],       // Moderna y técnica
        body: ['"Montserrat"', 'sans-serif'],     // Legible y profesional
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.8s ease-out both',
        'fade-in-right': 'fade-in-right 0.8s ease-out both',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
