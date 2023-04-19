/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Tilt Warp', 'SFMono-Regular', 'system-ui'],
        'stela': ['Bayon', 'cursive', 'system-ui'],
      }
    },
  },
  plugins: [],
}

