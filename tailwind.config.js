/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-up-delay-100': 'fade-in-up 0.6s ease-out 0.1s forwards',
        'fade-in-up-delay-200': 'fade-in-up 0.6s ease-out 0.2s forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}