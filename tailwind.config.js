/** @type {import('tailwindcss').Config} */
//https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/*.html", "./src/**/*.{html,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1140px",
    },
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      primary: "#359740",
      hover: "#2BB159",
      danger: "#E55C5C",
      yellow: "#FFCF55",
      textPrimary: "#1F2533",
      textSecondary: "#70737C",
      lightGreyStroke: "#EFEFEF",
      lightGreen: "#EAF1EB",
      lightBlue: "#EFF2F8",
      invisibleGreen: "rgba(53, 151, 64, 0.08)",
    },
    extend: {
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
