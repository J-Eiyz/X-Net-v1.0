/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        xblue: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff',
          600: '#00BFFF',
          700: '#0099cc',
          800: '#007399',
          900: '#004d66',
        }
      },
    },
  },
  plugins: [],
};
 