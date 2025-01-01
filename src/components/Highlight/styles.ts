import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from './types'

type WrapperProps = Pick<HighlightProps, '$bgImage' | 'alignment'>
type ContentProps = Pick<HighlightProps, 'alignment'>

const wrapperModifiers = {
  start: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2.3fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,

  end: () => css`
    color: red !important;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
      align-items: flex-end;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, $bgImage, alignment }) => css`
    position: relative;
    background-image: url(${$bgImage});
    background-position: center center;
    background-size: cover;
    height: 20rem;
    display: grid;

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.blackAlpha7};
    }

    ${alignment && wrapperModifiers[alignment]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxs};
    z-index: ${theme.layers.base};
    max-height: 20rem;
    max-width: 100%;
    grid-area: floatimage;
    align-self: flex-end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
      padding: 0 ${theme.spacings.xs};
    `};
  `}
`

export const Content = styled.div<ContentProps>`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.xs};
    grid-area: content;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.lg};
      align-self: end;
    `};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes['2l']};
    `}
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.normal};
    margin-bottom: ${theme.spacings.sm};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.lg};
      margin-bottom: ${theme.spacings.md};
    `}
  `}
`
