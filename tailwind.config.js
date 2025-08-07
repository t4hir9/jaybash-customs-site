/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jayYellow: '#FFC107', // Vibrant yellow
        jayBlack: '#1A1A1A',  // Deep black
        jayGrey: '#4A4A4A',   // Medium grey
        jayWhite: '#F5F5F5',  // Off-white
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}