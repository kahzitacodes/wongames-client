import styled, { css, DefaultTheme } from 'styled-components'
import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: ${theme.borderRadius.sm};
    overflow: hidden;

    ${RibbonStyles.Wrapper} {
      z-index: ${theme.layers.base};
    }
  `}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.borderRadius.sm};
    border-top-right-radius: ${theme.borderRadius.sm};
    height: 16rem;
    width: 100%;
    position: relative;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
    padding: ${theme.spacings.xs};
    position: relative;
    background-color: ${theme.colors.white};
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: calc(100% - 2.4rem);
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weight.bold};
    line-height: 130%;
  `}
`
export const Developer = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.xs};
  `}
`
export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.brand};
    fill: ${theme.colors.brand};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${theme.spacings.xs};
    top: ${theme.spacings.xs};

    svg {
      width: 2.2rem;
      height: 2.2rem;
      transition: all 0.2s linear;
    }

    &:hover {
      svg {
        transform: scale(110%);
      }
    }
  `}
`

export const Buybox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxs};
    justify-content: space-between;
  `}
`

export const PriceBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxs};
    justify-content: flex-end;
  `}
`

type PriceProps = {
  $isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.accent};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.md};
    border-radius: ${theme.borderRadius.sm};
  `,

  oldPrice: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.sm};
    text-decoration: line-through;
  `
}

export const Price = styled.span<PriceProps>`
  ${({ theme, $isPromotional }) => css`
    ${!$isPromotional && priceModifiers.default(theme)}
    ${$isPromotional && priceModifiers.oldPrice(theme)}
  `}
`
