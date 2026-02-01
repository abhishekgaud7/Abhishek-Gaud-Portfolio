/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1e293b', // Slate 800 - Text
          100: '#334155',
          200: '#475569',
          300: '#64748b',
        },
        primary: {
          DEFAULT: '#6366f1', // Indigo 500
          glow: '#818cf8',
        },
        accent: {
          DEFAULT: '#f43f5e', // Rose 500
          glow: '#fb7185',
        },
        secondary: {
          DEFAULT: '#0ea5e9', // Sky 500
          glow: '#38bdf8',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(255, 255, 255, 0.5)',
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        heading: ['"Syne"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'neon': '0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.1)', // Softer glow
        'neon-cyan': '0 0 15px rgba(14, 165, 233, 0.3), 0 0 30px rgba(14, 165, 233, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1a1a40 0deg, #0a0a0a 180deg, #1a1a40 360deg)',
      },
      animation: {
        'slow-spin': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}


