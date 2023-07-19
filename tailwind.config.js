/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'trans-left': {
          '0%': { transform: 'translateX(-200%)', opacity: 0 },
          '50%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'trans-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'wave1-animation': {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(100%)' },
        },
        'wave2-animation': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
      },
      animation: {
        'trans-left': 'trans-left 1s ease-in-out',
        'trans-bottom': 'trans-bottom 1s ease-in-out',
        'wave1': 'wave1-animation 5s linear infinite',
        'wave2': 'wave2-animation 6s linear infinite',
      },
    },
  },
  plugins: [],
};
