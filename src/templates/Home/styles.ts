import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '@/components/Heading/styles'
import * as CardSliderStyles from '@/components/CardSlider/styles'
import * as HighlightStyles from '@/components/Highlight/styles'

export const Section = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${CardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.md};
    }
    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${CardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.lg} * 2);
  `}
`

export const SectionBanner = styled(Section)`
  ${({ theme }) => css`
    margin: ${theme.spacings.lg} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.lg} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`
export const SectionLight = styled(Section)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings['2l']} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.bgInverse};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.lg};
    padding-bottom: ${theme.spacings.xs};
    padding-top: ${theme.spacings['2l']};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings['2l']} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
