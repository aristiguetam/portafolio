/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: "class",
  // lightMode : "media",
  theme: {
    extend: {
      colors : {
        primary : {
          light:  '#6246EA',
          // default: '#7F5AF0',
          dark: '#7F5AF0',
        },
        background: {
          light: "#FFFFFE",
          // default: '#16161A',
          dark: "#16161A" ,
        },
      },
     
    },
  },
  plugins: [],
}
