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
        // Light restaurant surface tokens
        surface: {
          ground: '#fbfaf6', // Main canvas background (#fbfaf6)
          card: '#ffffff',   // White surface (#ffffff)
          alt: '#f4f1ea',    // Warm alternate surface (#f4f1ea)
          subtle: '#f4f1ea', // Semantic alias for warm alternate
          hover: '#f7f5ef',  // Light card hover state
          border: '#e5e0d8', // Subtle warm gray border
          'border-subtle': 'rgba(0, 0, 0, 0.06)',
          // Retained dark tokens for footer & intentionally dark modules
          dark: '#0c0d0f',
          'dark-card': '#14161a',
          'dark-hover': '#1a1d22',
          'dark-border': '#232730',
        },
        // Primary brand orange (caramelized crust / flame sear)
        amberGrill: {
          50: '#fdf8f4',
          100: '#faeee5',
          200: '#f4dac9',
          300: '#eabfa3',
          400: '#dd986d',
          500: '#d56a29', // Core brand primary (#d56a29)
          600: '#be5318',
          700: '#9e3f14',
          800: '#7f3316',
          900: '#672c16',
          950: '#381408',
        },
        // Golden accent (badges, stars, highlights)
        golden: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Golden accent (#f59e0b)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Typography text tokens
        ink: {
          primary: '#181a1e',   // Primary text (#181a1e)
          secondary: '#525866', // Secondary text (#525866)
          muted: '#646a78',     // Captions & timestamps (WCAG AA >= 4.5:1)
          inverted: '#ffffff',  // Text on dark/primary surfaces
        },
        // Charcoal tokens (Footer & dark accents)
        charcoal: {
          50: '#f6f7f8',
          100: '#eceef0',
          200: '#d5d8dc',
          300: '#b0b5bd',
          400: '#646a78',
          500: '#525866',
          600: '#3f444f',
          700: '#2b2f38',
          800: '#1e2229',
          900: '#14161a', // Footer card
          950: '#0c0d0f', // Deepest charcoal foundation
        },
        // Warm cream palette preserved for backward compatibility
        cream: {
          50: '#faf8f5',
          100: '#f4f1ea',
          200: '#e5ded1',
          ground: '#fbfaf6',
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
        'card-subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card-elevated': '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'btn-subtle': '0 2px 6px rgba(190, 83, 24, 0.25)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
      },
    },
  },
  plugins: [],
};
