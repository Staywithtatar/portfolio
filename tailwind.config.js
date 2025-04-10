/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#10b981", // Green color similar to the "Folio" text
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };