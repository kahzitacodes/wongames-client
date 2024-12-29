import * as S from './styles'
import * as Icon from 'lucide-react'
import { Logo } from '../Logo'
import { useState } from 'react'
import { Button } from '../Button'
import { MenuProps } from './types'
import { MediaMatch } from '../MediaMatch'

export const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch $lessThan="medium">
        <S.IconWrapper aria-label="open menu" onClick={() => setIsOpen(true)}>
          <Icon.Menu />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo $hideOnMobile area-label="won games" />
      </S.LogoWrapper>

      <MediaMatch $greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper aria-label="search">
          <Icon.Search />
        </S.IconWrapper>

        <S.IconWrapper aria-label="open shopping cart">
          <Icon.ShoppingCart />
        </S.IconWrapper>

        {!userName && (
          <MediaMatch $greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} $isOpen={isOpen}>
        <S.IconWrapper aria-label="close menu" onClick={() => setIsOpen(false)}>
          <Icon.X />
        </S.IconWrapper>

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!userName && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!userName && (
          <S.RegisterBox>
            <Button $fullWidth size="lg">
              Log in now
            </Button>

            <span>or</span>
            <S.CreateAccount>Create account</S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
