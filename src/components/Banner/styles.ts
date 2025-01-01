import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.div`
  position: relative;

  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;

      &::before {
        display: none;
      }
    }
  `}

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 1rem 0 rgba(0,0,0,0.2);
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 24rem;

    background-color: ${theme.colors.grayLight};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.grayDark};
    padding: ${theme.spacings.xs} ${theme.spacings.sm} ${theme.spacings.sm};

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.blackAlpha7};
      borderRadius: ${theme.borderRadius.md};
      padding: ${theme.spacings.md} ${theme.spacings.lg} ${theme.spacings.lg};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2l']};
    `}
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.sm};
    margin-bottom: ${theme.spacings.xs};

    strong {
      color: ${theme.colors.accent};
      font-weight: ${theme.font.weight.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.lg};
      margin-bottom: ${theme.spacings.md}
    `}
  `}
`
