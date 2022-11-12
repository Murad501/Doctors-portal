/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          neutral: "#3A4256",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
