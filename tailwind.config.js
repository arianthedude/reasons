/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["var(--font-myfont)"],
      },
      // add any custom colors etc. here
      colors: {
        primary: {
          50: "#fff8f3",
          100: "#feeede",
          500: "#ff7a59",
        },
      },
    },
  },
  plugins: [],
};