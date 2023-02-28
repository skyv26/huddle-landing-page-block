/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        open_sans: ['Open Sans', ...fontFamily.serif],
        poppins: ['Poppins', ...fontFamily.serif]
      },
    },
  },
  plugins: [],
}