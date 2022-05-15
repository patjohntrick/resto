module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        josefin: ["Josefin-Sans", "mono"],
      },
    },
    screens: {
      phone: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      xxl: "2560px",
    },
  },
  plugins: [],
};
