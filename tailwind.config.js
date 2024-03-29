/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    screens: {
      'sm': '640px', // Small screens, mobile phones
      'md': '768px', // Medium screens, tablets
      'lg': '1024px', // Large screens, laptops
      'xl': '1280px', // Extra large screens, desktops
      'iphone': {'max': '428px'}, // Custom breakpoint for smaller iPhones
      'iphone-landscape': {'max': '926px'}, // Custom breakpoint for larger iPhones in landscape
    },
    margin: {
      '-10': '-30px',
    },
    colors: {
      'my-dark':'#1a202c',
      'my-hover':'#1a202c',
      'my-grey':'#e7e7f1',
      'my-grey-dark':'#45454a',
      'my-light-grey':'#e7e7f1',
      'my_logo_bg':'#BCEC7E',
      'my_logo_light':'#EDFFDE',
      'my_logo_dark':'#7ca349',
      'my_sucess':'#58ad2d',
      'dark_green':'#007F73',
      'dark_light_green':'#4CCD99',
      'golden':'#FFC700',
      'yellow':'#FFF455',
      'red':'#FA7070',
      'cream':'#FEFDED',
      'light_green':'#C6EBC5',
      'vintage_green':'#A1C398'

    },
  },
},
  plugins: [],
}