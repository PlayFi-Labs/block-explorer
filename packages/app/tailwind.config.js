const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    container: false,
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        pink: "#F75889",
        gray: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#b5b5b5",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        primary: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#bbe1fc",
          300: "#7fc9fa",
          400: "#58baf7",
          500: "#1194e6",
          600: "#0474c5",
          700: "#055c9f",
          800: "#095083",
          900: "#0d436d",
        },
        secondary: colors.yellow,
        neutral: colors.gray,

        success: colors.green,
        error: {
          50: "#fef3f2",
          100: "#fee5e2",
          200: "#fecfca",
          300: "#fcaea5",
          400: "#f76858",
          500: "#ef5544",
          600: "#dc3826",
          700: "#b92c1c",
          800: "#99281b",
          900: "#7f271d",
        },
        warning: colors.yellow,
      },
      screens: {
        xs: "480px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen xl": {
            maxWidth: "1240px",
          },
        },
      });
    },
  ],
};
