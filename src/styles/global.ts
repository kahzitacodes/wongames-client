import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

type GLobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: React.NamedExoticComponent<
  GLobalStylesProps & DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/poppins-v22-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/poppins-v22-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/poppins-v22-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/poppins-v22-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem == 14px)
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};

      ${!removeBg &&
      css`
        background: ${theme.color.bg}; !important};
      `}
    }
  `}
`

export default GlobalStyles
