/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#1A001E',
      'purple': '#6745C8',
      'green': '#16A968',
      'red': '#E84064',
      'teal': '#52B8A1',
      'yellow': '#FFD329',
      'grey': '#B587BE',
      'dark-grey': '#300238',
      'medium-grey': '#391B3E',
      'dark-purple': '#5B3562',
      'border-color-light': '#8D6C93',
      'border-color-dark': '#5B3562',
      'hover-color': '#4B2652',
    },
    fontFamily: {
      'trap': ['Trap', 'sans-serif'],
      'circular': ['Circular', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        // 'shadow-inner': 'inset 0 3px 20px rgba(26, 0, 30, 0.5)',
        'shadow-inner': 'inset 0 12px 4px 0 rgb(0 0 0 / 0.05)'
        // inset 0 3px 20px 0 rgb(26 0 30 / 0.5);
      }
    },
  },
  plugins: [],
}
