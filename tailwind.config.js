/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f59e0b',

          secondary: '#713f12',

          accent: '#a21caf',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#3730a3',

          success: '#15803d',

          warning: '#ea580c',

          error: '#7f1d1d',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
