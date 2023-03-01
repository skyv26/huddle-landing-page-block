/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    hero_section: './src/assets/bg-hero-mobile.svg',
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