import styled, { css } from 'styled-components'
import * as HeadingStyles from '../Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.sm} 0;

    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.md};
    gap: 2.4rem;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    a,
    span {
      color: ${theme.colors.gray};
      text-decoration: none;
      font-size: ${theme.font.sizes.sm};
      display: block;
    }

    a: hover {
      text-decoration: decoration;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xs};
    margin: ${theme.spacings.md} 0 0;
  `}
`
