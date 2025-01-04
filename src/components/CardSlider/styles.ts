import styled, { css } from 'styled-components'
import { CardSliderProps } from './types'
import media from 'styled-media-query'

type WrapperProps = Pick<CardSliderProps, 'color'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxs};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxs};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xs};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xs};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xl};
    }
    .slick-next {
      right: -${theme.spacings.xl};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
