/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // Padelo Green
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#099c37", // Main green
          600: "#088030",
          700: "#076629",
          800: "#065222",
          900: "#05441c",
          950: "#033a17",
        },
      },
    },
  },
  plugins: [],
}
