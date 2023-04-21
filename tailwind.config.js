/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#14213d',
        secondary: '#06d6a0',
        primaryTint: '#023047',
        primaryText: '#d1d5db',
        darkText: '',
      },
    },
  },
  plugins: [],
};
