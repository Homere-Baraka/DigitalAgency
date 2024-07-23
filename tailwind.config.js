/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./home.html",
    "./script.js",
  ],
    theme: {
      colors: {
        bg1: "#faf9ff",
        bg3: "#f8f6f9",
        bg_bloc1: "#f0f2ff",
        bg_bloc2: "#f0fff8",
        dark: "#000000",
        mauve: "#750e83",
        principal: "#b13980",
        white: "#ffffff",
        text: "#4A5568",
        shadow: "#E7DAED",
        text2: "#718096",
        bg_parten: "#F7F7FA",
        yellow: "#ffd63e",
        text_bloc: "#57007B",
        bg: "#F7F7FA",
      },
      gradientColors: {
        mauve: "#750e83",
        principal: "#b13980",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xls: "1536px",

      },
      extend: {},
    },
  plugins: [],
}

