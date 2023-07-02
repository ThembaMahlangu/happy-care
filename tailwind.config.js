module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'darkorange',
        'secondary': '#374151',
        'accent': '#60A5FA',
      },
      textColor: {
        'primary': '#1F2937',
        'accent': '#60A5FA',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}