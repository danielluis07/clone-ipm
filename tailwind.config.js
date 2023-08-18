/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        largebox: "0 18px 43px -37px rgba(0,0,0,.52)",
        minibox: "0 5px 21px rgba(0,0,0,.2)",
      },
      colors: {
        orange: "#F92C2C",
        lightorange: "#EC6607",
        gray: "#F0F0F0",
        lightgray: "#C4C4C4",
        standard: "#717171",
        strong: "#646464",
        strongred: "#9A0518",
      },
    },
  },
  plugins: [],
};
