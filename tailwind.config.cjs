/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-bright-orange": "hsl(31, 77%, 52%)",
        "p-dark-cyan": "hsl(184, 100%, 22%)",
        "p-very-dark-cyan": "hsl(179, 100%, 13%)",
        "n-transparent-white": "hsla(0, 0%, 100%, 0.75)", // paragrahps
        "n-very-light-gray": "hsl(0, 0%, 95%)", // background, headings, buttons
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display", "cursive"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
