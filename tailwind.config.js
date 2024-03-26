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
      'my_sucess':'#58ad2d'


    },
  },
},
  plugins: [],
}