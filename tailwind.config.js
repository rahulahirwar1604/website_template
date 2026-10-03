/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal foundation (not harsh pure black, but dark cast-iron tone)
        surface: {
          ground: '#0c0d0f',
          card: '#14161a',
          hover: '#1a1d22',
          border: '#232730',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
        },
        // Warm artisan grill & smash tone (earthy caramelized amber-orange, sophisticated & appetizing)
        amberGrill: {
          50: '#fdf8f4',
          100: '#faeee5',
          200: '#f4dac9',
          300: '#eabfa3',
          400: '#dd986d',
          500: '#d56a29', // Core brand primary
          600: '#be5318',
          700: '#9e3f14',
          800: '#7f3316',
          900: '#672c16',
          950: '#381408',
        },
        cream: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5ded1',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card-subtle': '0 2px 8px rgba(0, 0, 0, 0.25)',
        'card-elevated': '0 8px 24px -4px rgba(0, 0, 0, 0.45)',
        'btn-subtle': '0 2px 6px rgba(213, 106, 41, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
      },
    },
  },
  plugins: [],
};
