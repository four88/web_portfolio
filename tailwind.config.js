/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#272322",
      dark: "#1C1C1C",
      primaly: "#D3C5B4",
      second: "#767067",
      accent: "#FB592D",
    },

    extend: {
      fontFamily: {
        krick: ["Krick", "sans-serif"],
        clover: ["Clover", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
