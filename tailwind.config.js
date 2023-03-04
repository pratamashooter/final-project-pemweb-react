/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Open Sans, sans-serif",
      mono: "Fira Code, monospace",
    },
  },
  plugins: [],
};
