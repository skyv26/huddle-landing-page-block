/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': 'url(\'./src/assets/bg-hero-mobile.svg\')',
      },
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        'open-sans': ['Open Sans', ...fontFamily.sans],
        'poppins': ['Poppins', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}