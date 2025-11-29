/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vp-surface': 'rgba(15,23,42,0.85)',
      },
      boxShadow: {
        'vp-soft': '0 24px 80px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        'vp-xl': '26px',
      },
    },
  },
  plugins: [],
}


