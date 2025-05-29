/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust depending on your project
  ],
  theme: {
    screens: {
      xs: '360px', 
      sm: '480px', 
      md: '768px', 
      lg: '1024px',
      xl: '1280px', 
      '2xl': '1536px', 
    },
    extend: {
      colors: {
        bgDark: '#222831',
        teal: '#00ADB5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'gradient-x': 'gradient 5s ease infinite',
      },
    },
  },
  plugins: [],
  
}

