/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColors: {
          primary: "#141B27",
          secondary: "#7F8EA3",
          link: "#6338F6",
          danger: "#E91E63",
        },
        borderColors: {
          primary: "#E8E8E9",
        },
      },
    },
  },
  plugins: [],
};
