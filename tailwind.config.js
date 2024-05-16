module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '60px': ['60px', '78.12px'],
      },
      colors: {
        'custom-black': '#282828',
      },
      spacing: {
        'max-content': '1300px', // Adding max width
      },
    },
  },
  plugins: [],
}
