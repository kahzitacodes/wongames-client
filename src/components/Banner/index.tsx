'use client'

import { useEffect, useState } from 'react'
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
}: BannerProps) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <S.Wrapper>
      {ribbon?.trim() && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.Image src={img} role="img" aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        {isHydrated && (
          <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
        )}
        <Button as="a" href={buttonLink} size="lg">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}
