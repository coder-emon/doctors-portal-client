/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
   colors:{
    primary: '#0FCFEC',
    secondary: '#19D3AE',
    accent: '#3A4256',
    white: '#ffffff',
    gray: '#939393',
    emon:"#000000",
   }

  },
  plugins: [require("daisyui")],
  daisyui: { 
    themes: [
      {
        doctorstheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          white: '#ffffff',
          gray: '#939393',
          
        },
      },
    ],
  },
}

