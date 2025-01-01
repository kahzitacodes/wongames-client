import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from './types'

const darkColors: Record<RibbonColors, keyof DefaultTheme['colors']> = {
  accent: 'accentDark',
  red: 'redDark'
}

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${theme.colors[darkColors[color]]};
      border-top-color: ${theme.colors[darkColors[color]]};
    }
  `,

  md: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.sm};
    padding: 0 ${theme.spacings.md};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  sm: (theme: DefaultTheme) => css`
    height: 2.8rem;
    font-size: ${theme.font.sizes.xs};
    padding: 0 ${theme.spacings.sm};
    right: -1.5rem;

    &::before {
      top: 2.8rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    top: ${theme.spacings.xs};
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};
    width: fit-content;
    position: absolute;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
