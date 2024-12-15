/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... 
    },
    extend: {
      colors: {
        'primary' : '#5f6FFF'
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

