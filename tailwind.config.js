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
      'dark-grey': '#222222',
      'grey': '#A4A4A4',
      'forest-green': '#35A853',
      'gold': '#FBBC05',
      'blue': '#4285F5',
      'red': '#EB4335',
    },
    fontFamily: {
      mono: ['Courier New'],
      sans: ['Montserrat']
    },
    backgroundSize: {
      '46': '52px'
    },
    extend: {
      backgroundImage: {
        'profile': "url('../portfolio/assets/profile.png')",
        'blog-pic': "url('../portfolio/assets/blog-man.png')",
        '404-pic': "url('../portfolio/assets/404-man.png')",

        'email-icon': "url('../portfolio/assets/email-icon.png')",
        'download-icon': "url('../portfolio/assets/download-icon.png')",
        'github-icon': "url('../portfolio/assets/github-icon.png')",
        'linkedin-icon': "url('../portfolio/assets/linkedin-icon.png')",
        'whatsapp-icon': "url('../portfolio/assets/whatsapp-icon.png')",

        'google-logo': "url('../portfolio/assets/google-logo.png')",
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}
