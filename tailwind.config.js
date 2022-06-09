module.exports = {

  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      'xs': '320px',
      'sm': '428px',
      'md': '640px',
      'lg': '768px',
      'xl': '976px',
      '2xl': '1280px',
      '3xl': '1440px',
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
        'profile-pic': "url('public/assets/newprofile.png')",
      })
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
