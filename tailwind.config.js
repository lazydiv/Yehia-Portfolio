module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main_yellow': 'rgb(255, 255, 42)',
      }
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}