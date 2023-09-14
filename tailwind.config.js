import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
  theme: {
    colors: {
      'dark-blue': 'hsl(240, 38%, 20%)',
      'grayish-blue': 'hsl(240, 18%, 77%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'pattern-img': 'url("./src/assets/images/pattern-bg.svg")',
        'pattern-curve': 'url("./src/assets/images/pattern-curve.svg")',
        'pattern-quotes': 'url("./src/assets/images/pattern-quotes.svg")',
      },
      animation: {
        'slide-up-fade': 'slide-up-fade 1s ease-out',
      },
      keyframes: {
        'slide-up-fade': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '100%',
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0%',
          },
        },
      },
    },
  },
};
