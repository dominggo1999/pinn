module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': '#11121D',
        primary: '#ffffff',
        accent: '#E53265',
        'accent-lighter': '#F04D7A',
      },
      transitionProperty: {
        bg: 'background-color',
      },
      transitionTimingFunction: {
        'out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
