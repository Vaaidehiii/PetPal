module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        pet: {
          peach: '#FFD9C7',
          coral: '#FF7A59',
          mint: '#B7F0D7',
          lilac: '#E8D8FF',
          navy: '#172033',
          sand: '#FFF7F3',
          warm: '#FDE9D7'
        }
      }
    }
  },
  plugins: []
};
