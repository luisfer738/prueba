/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2F2F2",
        secondary: "#ffff",
        gradienpri: "#87BF4E",
        gradiensecon: "#F2E307",
        botton: "#D93636",
        post: "#F8F7E6",
      },
      screens: {
        mobileg: "450px",
        // => @media (min-width: 450px) { ... }
      },
      rotate: {
        55: "55deg",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },

          "75%": {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
