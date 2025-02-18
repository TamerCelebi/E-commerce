/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out'
      },
      colors: {
        primary: {
          DEFAULT: '#23A6F0',
          dark: '#1B80BE',
        },
        secondary: '#737373',
        dark: '#252B42',
        muted: '#BDBDBD',
        error: '#E74040',
        success: '#23856D',
      },
      backgroundImage: {
        'gradient-banner': 'linear-gradient(to right, #96E9FB, #ABECD6)',
      },
    },
  },
  plugins: [],
}
