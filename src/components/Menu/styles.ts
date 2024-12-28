import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { MenuFullProps } from './types'

export const Wrapper = styled.menu`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  position: relative;
  justify-content: space-between;
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
export const MenuNav = styled.div``
export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.md};
    margin: 0.3rem 2.4rem 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        height: 0.3rem;
        bottom: -0.4rem;
        background-color: ${theme.colors.brand};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${$isOpen ? 1 : 0};
    padding: ${theme.spacings.lg};
    pointer-events: ${$isOpen ? 'all' : 'none'};

    ${IconWrapper} {
      position: absolute;
      right: 2.4rem;
      top: 2.4rem;
      color: ${theme.colors.gray};

      &:hover {
        background-color: ${theme.colors.grayLight};
      }
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.xl};
      margin-bottom: ${theme.spacings.sm};
      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    ${RegisterBox} {
      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      display: block;
      margin: ${theme.spacings.xxs} 0;
      font-size: ${theme.font.sizes.xs};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.brand};
    border-bottom: 0.2rem solid ${theme.colors.brand};
    font-weight: ${theme.font.weight.bold};
  `}
`
