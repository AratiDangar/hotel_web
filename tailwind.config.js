/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      backgroundImage: {
        'resort': "url('/src/assets/resort1.jpg')",
        
    },
    px:{
      '15':'4.5rem'
    }
  },
  plugins: [],
}

}