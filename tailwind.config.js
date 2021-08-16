module.exports = {
  mode: "jit",
  purge: ["./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
