/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        amber: {
          700: '#b45309',
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
        },
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(255,191,0,0.4)',
      },
      keyframes: {
        crawl: {
          '0%': { top: '100%', transform: 'rotateX(25deg) translateZ(0)' },
          '100%': { top: '-250%', transform: 'rotateX(25deg) translateZ(-500px)' },
        },
      },
      animation: {
        crawl: 'crawl 25s linear infinite',
      },
    },
  },
  plugins: [],
}
