module.exports = {

  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'light-grey': '#E6E8E6',
      'forest-green': '#35A853',
      'gold': '#FBBC05',
    },
    fontFamily: {
      mono: ['Courier New'],
      sans: ['Montserrat']
    },
    extend: {
      backgroundImage: theme => ({
        'profile-pic': "url('./img/profile.png')",
      })
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
