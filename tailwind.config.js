/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7f5f5",
        ink: "#1f2937"
      },
      boxShadow: {
        nav: "0 1px 8px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};
