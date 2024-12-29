import * as S from './styles'
import { HeadingProps } from './types'

export const Heading = ({
  children,
  color = 'white',
  $borderLeft,
  $borderBottom,
  size = 'md',
  bordercolor = 'brand'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    $borderLeft={$borderLeft}
    $borderBottom={$borderBottom}
    size={size}
    bordercolor={bordercolor}
  >
    {children}
  </S.Wrapper>
)
