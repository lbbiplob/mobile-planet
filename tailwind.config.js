/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mobileplanetheme: {
          primary: "#177DA6",
          secondary: "#0FC2C0",
          accent: "#72DBF2",
          neutral: "#023859",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
