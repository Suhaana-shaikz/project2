/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [ function ({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
            'scrollbar-width': 'none', /* Firefox */
            '&::-webkit-scrollbar': {
              display: 'none', /* Safari and Chrome */
            },
          },
        });
      },
    ],
  }

  