'use client'

import * as S from './styles'
import { HeadingProps } from './types'

export const Heading = ({
  children,
  color = 'white',
  $borderLeft,
  $borderBottom,
  size = 'md',
  $borderColor = 'brand'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    $borderLeft={$borderLeft}
    $borderBottom={$borderBottom}
    size={size}
    $borderColor={$borderColor}
  >
    {children}
  </S.Wrapper>
)
