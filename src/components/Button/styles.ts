import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './types'

type WrapperProps = { $iconOnly: boolean } & Pick<
  ButtonProps,
  'size' | '$fullWidth'
>

const wrapperModifiers = {
  sm: (theme: DefaultTheme, iconOnly: boolean) => css`
    height: 3.2rem;
    font-size: ${theme.font.sizes.xs};
    padding: ${iconOnly ? 0 : theme.spacings.xxs};
    width: ${iconOnly ? '3.2rem' : 'auto'};

    svg {
      width: 1.6rem;
    }
  `,

  md: (theme: DefaultTheme, iconOnly: boolean) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.sm};
    padding: 0 ${iconOnly ? 0 : theme.spacings.xs};
    width: ${iconOnly ? '4rem' : 'auto'};

    svg {
      width: 2rem;
    }
  `,

  lg: (theme: DefaultTheme, iconOnly: boolean) => css`
    height: 4.8rem;
    font-size: ${theme.font.sizes.md};
    padding: 0 ${iconOnly ? 0 : theme.spacings.sm};
    width: ${iconOnly ? '4.8rem' : 'auto'};

    svg {
      width: 2.4rem;
    }
  `,

  $fullWidth: () => css`
    width: 100%;
    justify-content: center;
  `,

  $iconOnly: () => css`
    justify-content: center;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, $fullWidth, $iconOnly }) => css`
    background: linear-gradient(
      180deg,
      ${theme.colors.brand} 0%,
      ${theme.colors.brandDark} 40%
    );
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.borderRadius.sm};
    font-weight: ${theme.font.weight.bold};
    line-height: 0%;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: ${theme.spacings.xxs};
    background-size: 200% 200%;
    transition: background-position 0.2s linear;

    &:hover {
      background-position: 0 100%;
    }

    ${!!size && wrapperModifiers[size](theme, $iconOnly)};
    ${!!$fullWidth && wrapperModifiers.$fullWidth()};
    ${$iconOnly && wrapperModifiers.$iconOnly()}
  `}
`
