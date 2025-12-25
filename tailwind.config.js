/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vp-surface': 'rgba(255, 255, 255, 0.85)',
      },
      boxShadow: {
        'vp-soft': '0 24px 80px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'vp-xl': '26px',
      },
    },
  },
  plugins: [],
}


