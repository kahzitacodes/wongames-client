import * as S from './styles'
import { HeadingProps } from './types'

export const Heading = ({
  children,
  color = 'white',
  $borderLeft,
  $borderBottom
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    $borderLeft={$borderLeft}
    $borderBottom={$borderBottom}
  >
    {children}
  </S.Wrapper>
)
