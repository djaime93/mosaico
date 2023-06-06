const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
        editorialnew: ['EditorialNew', 'serif']
      },
      colors: {
        'mblue': '#2E37FF',
        'mdarkblue': '#000648',
        'success': '#4CAF50',
        'warning': '#F2C94C',
        'danger': '#F44336',
        'mono': {
          100: '#F4F4F4',
          200: '#EAE9EA',
          300: '#D4D3D4',
          400: '#BFBDBE',
          500: '#939092',
          600: '#5F5A5C',
          700: '#292326',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '6px 6px 20px rgba(46, 55, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

