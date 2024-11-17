/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mine-shaft": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2d2d2d",
        },
        "azure-radiance": {
          50: "#edfaff",
          100: "#d6f3ff",
          200: "#b5ebff",
          300: "#83e1ff",
          400: "#48ceff",
          500: "#1eb0ff",
          600: "#0693ff",
          700: "#007cf9",
          800: "#0861c5",
          900: "#0d549b",
          950: "#0e335d",
        },
      },
    },
  },
  plugins: [],
};
