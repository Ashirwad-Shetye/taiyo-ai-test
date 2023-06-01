/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        logoAccent: "#454a73",
        accent1: "#fce6dd",
        accent2: "#e76c82",
      },
      backgroundColor: {
        primary: "#eafcff",
        secondary: "#7f0bf0",
        accent1: "#fce6dd",
        accent2: "#e76c82",
      },
    },
  },
  plugins: [],
};
