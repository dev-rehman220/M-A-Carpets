/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#2C3539',
          light: '#3d4a4f',
          dark: '#1a2124'
        },
        beige: {
          DEFAULT: '#F5F1E8',
          light: '#FAF8F3',
          dark: '#E8E2D5'
        },
        'dark-green': {
          DEFAULT: '#2D5016',
          light: '#3d6b1f',
          dark: '#1d3a0f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
