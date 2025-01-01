import { Button } from '../Button'
import { Ribbon } from '../Ribbon'
import * as S from './styles'
import { BannerProps } from './types'

export const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subTitle,
  title,
  ribbon,
  ribbonColor,
  ribbonSize
}: BannerProps) => (
  <S.Wrapper>
    {ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />

      <Button as="a" href={buttonLink} size="lg">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)
