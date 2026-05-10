/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#F9F1D8',
          200: '#F0DEAA',
          300: '#E6CB7D',
          400: '#DDB850',
          500: '#D4A532',
          600: '#AA8428',
          700: '#80631E',
          800: '#554214',
          900: '#2B210A',
        },
        beige: {
          100: '#FDFCF0',
          200: '#FAF9E1',
          300: '#F5F5DC',
          400: '#E6E6CC',
          500: '#D7D7BD',
        },
        dark: {
          100: '#2A2A2A',
          200: '#1E1E1E',
          300: '#141414',
          400: '#0A0A0A',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
