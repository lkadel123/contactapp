/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        garay:"#5A5959",
        yello:"#FFEAAE",
        "dark-yello":"#FCCA3F",
        orange:"#F6820C",
        purpal:"#5F00D9"
      }
    },
  },
  plugins: [],
}

