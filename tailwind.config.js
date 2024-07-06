/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
      keyframes: {
        lightShade: {
          '0%': { boxShadow: '0 0 0 rgba(0, 255, 255, 0)' },
          '100%': { boxShadow: '0 0 20px 10px rgba(0, 255, 255, 0.5)' },
        },
        shade:{
          '0%': { boxShadow: 'inset 0 0 0 rgba(0, 255, 255, 0)' },
          '100%': { boxShadow: 'inset 0 -20px 50px 30px rgba(0, 255, 255, 0.5)' },
        },
        light: {
          '0%': { opacity: 0.3 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        lightShade: 'lightShade 5s ease-in-out forwards',
        light: 'light 5s ease-in-out forwards',
      },
       fontFamily:{
         sans:["Poppins","san-seif"],
       },
       colors:{
         primary:"#162c2c",
         secondary:"#098181",
         third:"#025321",
         darkBrand:"#03272d",
       },
       container:{
         center:true,
         padding:{
           default:"1rem",
           sm:"2rem",
         },
       },
 
     },
   },
   plugins: [],
 }
 
 