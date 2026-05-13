/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f8fafc',
        muted: '#a8b3c7',
        canvas: '#070b14',
        surface: '#0f172a',
        line: '#263247',
        accent: {
          DEFAULT: '#a78bfa',
          dark: '#8b5cf6',
          bright: '#c4b5fd',
          soft: 'rgba(167, 139, 250, 0.14)',
        },
      },
      boxShadow: {
        soft: '0 22px 60px rgba(0, 0, 0, 0.34)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
