import styled, { css } from 'styled-components'
import * as BannerStyles from '../Banner/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.sm};
      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxs};
        cursor: pointer;
        &.slick-active {
          background: ${theme.colors.brand};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('medium')`
      .slick-list {
        width: calc(100% + 4rem);
        margin-left: -2rem
      }

      .slick-slide {
        padding: 0 2rem;
      }
    `}

    ${media.greaterThan('large')`
      .slick-dots {
        position: absolute;
        right: -3rem;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;
        li {
          margin: ${theme.spacings.xxs} 0;
        }
      }

      ${BannerStyles.Wrapper} {
        margin: 0 auto;
      }
    `}
  `}
`
