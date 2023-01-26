/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Gilroy"],
        oblique: ["LibreBaskerville"],
        body: ["Lato"],
      },
      colors: {
        palm: "#62973d",
        silver: "#f2f2f2",
        olive: "41493b",
      },
    },
  },
  plugins: [],
};
