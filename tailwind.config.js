module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Cabin: ['Cabin', 'Arial', 'Helvetica', 'sans'],
        Hero: ['Hero', 'Arial', 'Helvetica', 'sans'],
        Bariol: ['Bariol', 'Arial', 'Helvetica', 'sans'],
      },
      colors: {
        ise: {
          white: '#FFFFFF',
          orange: '#E73E11',
          yellow: '#FEC531',
          gray: {
            10: '#E1E2E2',
            20: '#D3D3D4',
            30: '#2B2C2C',
          },
          blue: '#015EEA',
          sky: '#00C0FA',
        },
      },
    },
  },
  plugins: [],
};
