/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6363fc',
        'secondary': '#636081',
        'inpt-bgcolor': '#f5f7fb',
        'bg-color': '#f8fafb',
        'bg-chat': '#f2f3f7',
        'font-chat': '#7f7d94'
      },
      spacing: {
        'c34': '34rem',

        'c34': '34rem',
        'c33': '33rem',
        'c32': '32rem',
        'c31': '31rem',
      }
    },
  },
  plugins: [],
}
