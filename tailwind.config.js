/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        louize: ["Louize", "serif"],
        louize_italic: ["Louize Italic", "serif"],
        louize_medium: ["Louize Medium", "serif"],
        maax: ["Maax", "sans-serif"],
        maax_medium: ["Maax Medium", "sans-serif"],
      },
      colors: {
        almond: "#e9dbcd",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
