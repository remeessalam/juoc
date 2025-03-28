/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        secondary: "#f8f8f8",
        purpleColor: "#9c9797",
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
    },
  },
  plugins: [],
};
