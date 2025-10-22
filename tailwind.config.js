/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
      },
      colors:{
        blue:{
          50: '#E8EAF6',
          75: '#C5CAE9',
          100: '#9FA8DA',
          200: '#5C6BC0',
          300: '#3F51B5',
          400: '#303F9F',
        },
        violet: {
          50: '#F3E5F5',
          300: '#7C4DFF',
          400: '#651FFF',
        },
        yellow: {
          100: '#FFF9C4',
          300: '#FFEB3B', 
          400: '#FFC107',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          800: '#424242',
          900: '#212121',
        }
      }

    },
  },
  plugins: [],
}