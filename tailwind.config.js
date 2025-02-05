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
        primary: "#195908",
        almond: "#e9dbcd",
        granny_smith_apple: "#b2d99a",
        kombu_green: "#2f4230",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
