export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  borderRadius: {
    sm: '0.4rem',
    md: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600
    },
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2.0rem',
      '2l': '2.8rem',
      '3l': '5.2rem'
    }
  },
  colors: {
    brand: '#F366A7',
    brandDark: '#DC448A',
    accent: '#2496FF',
    accentDark: '#1177D6',
    danger: '#FB6E78',
    dangerDark: '#F55D5D',
    bg: '#141527',
    bgLight: '#1F2141',
    white: '#FAFAFA',
    black: '#05061A',
    blackAlpha7: 'rgba(5, 6, 26, 0.7)',
    grayLight: '#ECECEF',
    gray: '#6F7287',
    grayDark: '#2C2E3E',
    red: '#FB6E78',
    redDark: '#F55D5D'
  },
  spacings: {
    xxs: '0.8rem',
    xs: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xl: '4.8rem',
    '2l': '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
