module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      Rubik: ["'Rubik'", "sans-serif"],
      Roboto: ["'Roboto'", "sans-serif"],
    },
    extend: {
      spacing: {
        100: "30rem",
        128: "45rem",
        256: "50rem",
      },
    },
    screens: {
      xs: "0px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1806px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
