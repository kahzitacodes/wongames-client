import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from './types'
import media from 'styled-media-query'

const wrapperModifiers = {
  borderLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xs};
    border-left: 0.6rem solid ${theme.colors.accent};
  `,

  borderBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.md};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.6rem solid ${theme.colors.brand};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $borderLeft, $borderBottom }) => css`
    line-height: 130%;
    color: ${theme.colors[color!]};
    line-height: 130%;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2l']};
    `};

    ${$borderLeft && wrapperModifiers.borderLeft(theme)}
    ${$borderBottom && wrapperModifiers.borderBottom(theme)}
  `}
`
