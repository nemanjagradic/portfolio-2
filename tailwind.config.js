/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonToggleBackground: "var(--bg-buttonToggle)",
        primaryBackground: "var(--primary-background)",
        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        accent: "var(--accent-color)",
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
