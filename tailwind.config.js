module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // {
      //   manufacturer: {
      //     primary: "#701a75",
      //     secondary: "#6b21a8",
      //     accent: "#3A4256",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      "fantasy"
    ],
  },
  plugins: [require("daisyui")],
}
