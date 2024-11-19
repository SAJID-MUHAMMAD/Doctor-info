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
        bgColor: "rgba(59, 130, 246, 0.1)",
      },
      screens: {
        xxl: "1440px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
