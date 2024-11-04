/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

