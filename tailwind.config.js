const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors
    },
    fontFamily:{
      sans :['"Poppins"', 'sans-serif'],
      // poppins :['"Poppins"', 'sans-serif'],
      dancingscript: ['"Dancing Script"', 'curvise']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
