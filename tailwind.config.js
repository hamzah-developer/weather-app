/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: '560px',
      lg: '768px',
      xl: '1025px',
      '2xl': '1600px',
      'md-max': {
        max: '559px'
      },
      'lg-max': {
        max: '767px'
      },
      'xl-max': {
        max: '1024px'
      },
      '2xl-max': {
        max: '1599px'
      }
    },
    colors: {
      'black' : '#000000',
      'white' : '#FFFFFF',
      'blue' : '#000000',
      'purple' : '#3F0071',
      'pink' : '#FB2576',
    },
    spacing: {
      0: '0px',
      1: '1px',
      5: '5px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      55: '55px',
      60: '60px',
      65: '65px',
      70: '70px',
      75: '75px',
      80: '80px',
      85: '85px',
      90: '90px',
      95: '95px',
      100: '100px',
      105: '105px',
      110: '110px',
      115: '115px',
      120: '120px',
      125: '125px',
      130: '130px',
      135: '135px',
      140: '140px',
      145: '145px',
      150: '150px',
      '1/12': '8.33333333%',
      '2/12': '16.66666667%',
      '3/12': '25%',
      '4/12': '33.33333333%',
      '5/12': '41.66666667%',
      '6/12': '50%',
      '7/12': '58.33333333%',
      '8/12': '66.66666667%',
      '9/12': '75%',
      '10/12': '83.33333333%',
      '11/12': '91.66666667%',
      full: '100%',
      '16/9': '56.25%'
    },
    fontFamily: {
      satoshi: [
        'Satoshi',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
        '-apple-system',
        'sans-serif'
      ],
    },
    extend: {},
  },
  plugins: []


}
