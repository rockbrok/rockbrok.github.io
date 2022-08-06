module.exports = {

  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      'sm': '428px',
      'md': '640px',
      'lg': '768px',
      'xl': '976px',
    },
    borderWidth: {
      '2': '2px',
      '30': '30px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'light-grey': '#E6E8E6',
      'dark-grey': '#222222',
      'grey': '#A4A4A4',
      'grey-2': '#D9D9D9',
      'forest-green': '#35A853',
      'light-green': '#3ACA60',
      'gold': '#FBBC05',
      'blue': '#4285F5',
      'red': '#EB4335',
    },
    fontFamily: {
      mono: ['Courier New'],
      sans: ['Montserrat']
    },
    backgroundSize: {
      '46': '52px',
      '160': '160px',
      '200': '200px',
      '260': '260px',
      '280': '280px'
    },
    extend: {
      backgroundImage: {
        'email-icon': "url('../assets/imgs/email-icon.png')",
        'download-icon': "url('../assets/imgs/download-icon.png')",
        'github-icon': "url('../assets/imgs/github-icon.png')",
        'linkedin-icon': "url('../assets/imgs/linkedin-icon.png')",
        'google-logo': "url('../assets/imgs/google-logo.png')",
        'portfolio-logo': "url('../assets/imgs/portfolio-logo.png')",
      },
      rotate: {
        '270': '270deg',
      },
      spacing: {
        '50p': '50%',
        '55p': '55%',
        '75p': '75%',
        '2px': '2px',
        '10px': '10px',
        '14px': '14px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
        '180px': '180px',
        '200px': '200px'
      },
      margin: {
        '75px': '75px',
        '130px': '130px'
      },
      width: {
        '70p': '70%',
        '3/4': '75%',
        '118': '118px',
        '264': '264px',
        '320': '320px',
        '373': '372px',
        '388': '388px',
        '400': '400px',
        '430': '430px',
        '600': '600px',
        '688': '688px',
        '768': '768px',
        '884': '884px',
        '1040': '1040px',
        '1180': '1180px',
      },
      height: {
        '3/4': '75%',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '50': '50px',
        '60': '60px',
        '206': '206px',
        '244': '244px',
        '264': '264px',
        '302': '302px',
        '344': '344px',
        '364': '364px',
        '414': '414px',
        '498': '498px',
        '552': '552px',
        '600': '600px',
      },
      inset: {
        '25p': '25%',
        '0px': '0px',
        '10px': '10px',
        '15px': '15px',
        '25px': '25px',
        '28px': '28px',
        '35px': '35px',
        '50px': '50px',
        '206px': '206px'
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
