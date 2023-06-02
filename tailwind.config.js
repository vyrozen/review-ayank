/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        merriweather: ["Merriweather"],
      },
      screens: {
        ip678p: "414px",
      },
    },
  },
  plugins: [],
};
