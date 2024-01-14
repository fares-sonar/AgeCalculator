/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        off_white: "hsl(0, 0%, 94%)",
        light_gray: "hsl(0, 0%, 86%)",
        smokey_gray: " hsl(0, 1%, 44%)",
        off_black: "hsl(0, 0%, 8%)",
        purple: "hsl(259, 100%, 65%)",
        light_red: "hsl(0, 100%, 67%)",
      },
    },
  },
  plugins: [],
};
