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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}