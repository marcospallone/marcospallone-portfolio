/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  safelist: [
    {
      pattern:
        /(from|to|text|bg|border)-(cyan|rose|purple|green|orange)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    'text-cyan-400',
    'text-purple-400',
    'text-purple-600',
    'text-green-400',
    'text-orange-400',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      // colors: {
      //   cyan: {
      //     400: "#22d3ee",
      //   },
      //   purple: {
      //     500: '#a855f7',
      //   }
      // }
    },
  },
  plugins: [],
  important: true,
};
