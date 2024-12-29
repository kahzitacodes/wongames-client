import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingBorderColors, HeadingProps, HeadingSizes } from './types'
import media from 'styled-media-query'

const wrapperModifiers = {
  borderLeft: (
    theme: DefaultTheme,
    borderColor: HeadingBorderColors,
    size: HeadingSizes
  ) => css`
    padding-left: ${size === 'md' ? theme.spacings.xs : theme.spacings.xxs};
    border-left: ${size === 'md' ? '0.6rem' : '0.4rem'} solid
      ${theme.colors[borderColor]};
  `,

  borderBottom: (theme: DefaultTheme, borderColor: HeadingBorderColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.md};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.6rem solid ${theme.colors[borderColor]};
    }
  `,

  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};

    &::after {
      border-bottom-width: 0.4rem;
      width: 3rem;
    }
  `,

  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xl};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2l']};
    `};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $borderLeft, $borderBottom, bordercolor, size }) => css`
    line-height: 130%;
    color: ${theme.colors[color!]};
    line-height: 130%;

    ${$borderLeft &&
    bordercolor &&
    size &&
    wrapperModifiers.borderLeft(theme, bordercolor, size)}

    ${$borderBottom &&
    bordercolor &&
    wrapperModifiers.borderBottom(theme, bordercolor)}

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
