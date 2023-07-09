/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yinminblue: "#4E598C",
        sunset: "#F9C784",
        sandybrown: "#FCAF58",
        pumpkin: "#FF8C42",
      },
    },
  },
  plugins: [],
};
