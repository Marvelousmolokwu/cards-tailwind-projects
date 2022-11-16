/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        df: "280px",
        sm: "375px",
        md: "768px",
        lg: "910px",
        xl: "1024px",
        xxl: "1400px",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
