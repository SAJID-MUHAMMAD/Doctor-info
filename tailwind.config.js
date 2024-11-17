/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#3B82F6",
      },
      screens: {
        xxl: "1300px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
