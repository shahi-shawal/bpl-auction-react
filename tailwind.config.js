/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/image/football-arena-field-with-bright-stadium-lights-illumination_34982-123.avif')",
      }
    },
  },
  plugins: [require("daisyui")],
}

