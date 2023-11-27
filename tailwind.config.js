/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./public/index.html', './public/**/*.js', './public/**/*.svg'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
      },
      fontSize: {
        '8xl': '5.5rem',
      },
      colors: {
        'theme-color-one': '#8552f2',
        'theme-color-two': '#a988f2',
        'theme-color-three': '#b3b6f2',
        'theme-color-four': '#f2ab27',
        'theme-color-five': '#f2f2f2',
        'theme-color-six': '#f9f1fe ',
        ...defaultTheme.colors,
      },
      screens: {
        xs: '480px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
