/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,vue}', // Scan tous les fichiers HTML, JS et Vue dans src
    './public/**/*.html',        // Scan tous les fichiers HTML dans public
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '1rem',
        'base': '1.15rem',
        'lg': '1.25rem',
        'xl': '2.25rem',
        '2xl': '2.6rem', 
        '3xl': '4.15rem', 
        '4xl': '5rem'
      },
    },
  },
  plugins: [],
}

