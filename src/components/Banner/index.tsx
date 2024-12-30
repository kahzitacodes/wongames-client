import { Button } from '../Button'
import * as S from './styles'
import { BannerProps } from './types'

export const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subTitle,
  title
}: BannerProps) => (
  <S.Wrapper>
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
