module.exports = {
  content: ['./dist/*.html', './public/*.html', './src/**/*.{jsx,js}'],
  theme: {
    screens: {
      "sm": '640px',
      "md": '1000px',
      "lg": '1024px',
      "xl": '1280px',
      '2xl': '1536px',
    },
    fontFamily:{
      "sans":  ['Ubuntu']
    },
    extend: {},
  },
  plugins: [],
};
