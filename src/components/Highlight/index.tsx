'use client'

import { Button } from '../Button'
import * as S from './styles'
import { HighlightProps } from './types'

export const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  $bgImage,
  alignment = 'end',
  floatImage
}: HighlightProps) => (
  <S.Wrapper $bgImage={$bgImage} alignment={alignment}>
    {floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content alignment={alignment}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)
