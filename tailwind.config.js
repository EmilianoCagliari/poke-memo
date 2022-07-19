/** @type {import('tailwindcss').Config} **/

const plugin = require('tailwindcss/plugin'); 

const myClass = plugin( function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  });
});
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      poke:"'Pokemon Solid', sans-serif",
    },
    extend: {
    },

  },
  plugins: [
    myClass
  ],
}