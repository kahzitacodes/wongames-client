import * as S from './styles'
import SlickPrimitive from 'react-slick'
import { SliderProps } from './types'

export const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickPrimitive {...settings}>{children}</SlickPrimitive>
  </S.Wrapper>
)
