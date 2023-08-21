/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#7FFC8D',
          2: '#C6FA56',
        },
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [],
};
