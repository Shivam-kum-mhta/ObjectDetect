/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navColor: "#272c3d",
        buttonBorder: "#606e9e",
        heroColor: "#12181f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Define "Inter" as a custom font family
      },
    },
  },
  plugins: [],
};
