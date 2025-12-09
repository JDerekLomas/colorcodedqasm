/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ColorCodedQASM palette
        dark: {
          DEFAULT: '#0a0a0a',
          50: '#262626',
          100: '#1f1f1f',
          200: '#171717',
          300: '#141414',
          400: '#0f0f0f',
          500: '#0a0a0a',
        },
        cream: {
          DEFAULT: '#e8e3d6',
          light: '#f5f3ed',
          dark: '#d4cfc2',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#e8d78a',
          dark: '#a68620',
        },
        burgundy: {
          DEFAULT: '#722f37',
          light: '#8b3a44',
          dark: '#5a252c',
        },
        warm: {
          DEFAULT: '#542c23',
          light: '#6b3a2f',
          dark: '#3d201a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'overline': '0.15em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        reveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0% 0 0 0)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(90deg, #c9a227 0%, #e8d78a 50%, #c9a227 100%)',
        'gradient-warm': 'linear-gradient(135deg, #542c23 0%, #722f37 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201, 162, 39, 0.15)',
        'card-hover': '0 0 40px rgba(201, 162, 39, 0.1)',
      },
    },
  },
  plugins: [],
};
