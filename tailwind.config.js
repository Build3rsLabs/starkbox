/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stark: {
          primary: '#00D1B2',
          secondary: '#6F4CFF',
          accent: '#FF4C8C',
          dark: '#0A0B0D',
          darker: '#050607',
          gray: {
            100: '#F7F7F7',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#A3A3A3',
            accent: '#00D1B2',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
};