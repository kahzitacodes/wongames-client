import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.sm} 0;
    position: relative;
    justify-content: space-between;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxs};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.4rem;
    border-radius: ${theme.borderRadius.sm};

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      background-color: ${theme.colors.grayDark};
    }
  `}
`
