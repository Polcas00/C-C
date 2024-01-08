/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "close-menu": "url(../../assets/icons/icon-close.svg)",
        "open-menu": "url(../../assets/icons/icon-hamburger.svg)"
      }
    },
  },
  plugins: [],
}

