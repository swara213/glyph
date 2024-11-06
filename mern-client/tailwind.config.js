/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' :'#fdf4e3' ,
        'button' : '#DBC8A6'
      }
    },
  },
  plugins: [],
}

 