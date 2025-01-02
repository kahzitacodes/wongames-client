import Image from 'next/image'
import * as S from './styles'
import { Heart, ShoppingCart } from 'lucide-react'
import { CardProps } from './types'
import { Button } from '../Button'
import { Ribbon } from '../Ribbon'

export const Card = ({
  developer,
  img,
  price,
  title,
  favorite = false,
  onFavorite,
  promotionalPrice,
  ribbon,
  ribbonColor
}: CardProps) => (
  <S.Wrapper>
    {ribbon && (
      <Ribbon color={ribbonColor} size="sm">
        {ribbon}
      </Ribbon>
    )}

    <S.ImageContainer>
      <Image alt={title} src={img} fill />
    </S.ImageContainer>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>

        {favorite ? (
          <S.FavButton role="button" aria-label="remove from wishlist">
            <Heart fill="fill" />
          </S.FavButton>
        ) : (
          <S.FavButton
            role="button"
            aria-label="add to wishlist"
            onClick={onFavorite}
          >
            <Heart />
          </S.FavButton>
        )}
      </S.Info>

      <S.Buybox>
        <S.PriceBox>
          <S.Price>{promotionalPrice || price}</S.Price>
          {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
        </S.PriceBox>

        <Button size="sm" icon={<ShoppingCart />} />
      </S.Buybox>
    </S.Content>
  </S.Wrapper>
)
