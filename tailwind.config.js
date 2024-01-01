/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#78cc6d",
        lightBlack: "#646464",
        darkerBlack: "#323232",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out forwards",
        fadeOut: "fadeOut 0.7s ease-out forwards",
        "rotate-to-top": "rotate-to-top 20s linear infinite",
        "rotate-to-top-right": "rotate-to-top-right 25s linear infinite",
        "rotate-to-top-left": "rotate-to-top-left 30s linear 10s infinite",
        "rotate-to-bottom": "rotate-to-bottom 30s linear 17s infinite",
        "rotate-to-left": "rotate-to-left 30s linear 12s infinite",
      },
      screens: {
        large: "1180px",
        xs: "400px",
      },
    },
  },
  plugins: [],
};
