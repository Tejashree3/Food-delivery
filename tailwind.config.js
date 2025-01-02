/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary:"var(--primary-color)",
        branddark:"#1516161"
      },
      fontFamily:{
        Karla:['Karla','sans-serif']
      },
      container:{
        center:true,
        padding:{
          
          Default:"1rem",
          sm:"2rem",
          md:"3rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"

        }
      }
    },
  },
  plugins: [],
}