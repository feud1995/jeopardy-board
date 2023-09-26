/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jeopardyBlue: {
          DEFAULT: "#01169F"
        },
        moneyYellow: {
          DEFAULT: "#F2BA51"
        }
      },
      fontFamily: {
        baskerville: 'Libre Baskerville',
        roboto: "Roboto Condensed"
      },
    },
  },
  plugins: [],
}
