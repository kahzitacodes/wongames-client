import * as S from './styles'
import { ButtonProps } from './types'

export const Button = ({
  children,
  icon,
  size = 'md',
  $fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    $fullWidth={$fullWidth}
    $iconOnly={!!icon && !children}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
