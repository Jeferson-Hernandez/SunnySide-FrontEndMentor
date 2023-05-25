module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        softBlue: "#3dbeff",
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkDCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        veryDarkDBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        lightGreen: "#90d4c5",
        darkGreen: "#2e7567",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      screens: {
        md: "376px",
        lg: "800px",
        xl: "1200px",
      },
      letterSpacing: {
        "widest-xl": ".35em",
      },
    },
  },
  plugins: [],
};
