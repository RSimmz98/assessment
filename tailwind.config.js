/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryDark:"#240D57",
        primary: "#501FC1",
        primaryLight: '#8456EC',
        accent: '#E87BF8',
        primaryLighter: '#E87BF8',

      }
    },
  },
  plugins: [],
}