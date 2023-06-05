/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          light:  '#6246EA',
          dark: '#7F5AF0',
        },
        background: {
          light: "#F1F1F1",
          dark: "#16161A" ,
        },
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
