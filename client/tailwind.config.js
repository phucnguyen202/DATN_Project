/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      textColor: {
        custom: '#7e7e7e',
        customText: '#253D4E',
        greenCustom: '#3BB77E'
      },
      borderColor: {
        customBorder: '#BCE3C9'
      },
      backgroundColor: {
        customBg: '#3BB77E',
        custombggray: '#F2F3F4'
      },

    },
  },
  plugins: [],
}

