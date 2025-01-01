import * as S from './styles'
import { RibbonProps } from './types'

export const Ribbon = ({
  children,
  color = 'accent',
  size = 'md'
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)
