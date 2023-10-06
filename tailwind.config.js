/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        title_color :'#704214',  
        text_color:'#333333', 
        body_color:'#F5F5F5',
      },
      fontFamily: {
        font: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

