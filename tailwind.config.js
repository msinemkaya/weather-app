/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary-pink": "#E75481",
        "bg-primary-purple": "#929CDE",
        "primary-color": "#6d47b3",
        "secondary-color": "#571d72"
      },
      fontFamily: {
        "tilt-prism": "'Tilt Prism', cursive",
        "alegreya": "'Alegreya Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

