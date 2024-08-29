/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

const colors = {
  ...defaultTheme.colors,
  primary: {
    900: "#267ffd",
    800: "#418dff",
    700: "#589bff",
    600: "#6ea9ff",
    500: "#83b6ff",
    400: "#97c2ff",
    300: "#accfff",
    200: "#c1dbff",
    100: "#d5e7ff",
    50: "#e9f2fe",
    10: "#ebf3ff",
  },
  ground: "#f0f0f0",
  red1 : '#267ffd',
  green1: '#008000',
  green2: '#31B131'
  // Add your custom color here
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors, // Extend the colors with the custom colors
      // Add custom utilities here
      scrollbar: {
        hide: {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [
    // Add the plugin to use the custom utilities
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
}