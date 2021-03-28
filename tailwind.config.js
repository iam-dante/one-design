const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors
    },
    fontFamily:{
      poppins :['"Poppins"', 'san-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
