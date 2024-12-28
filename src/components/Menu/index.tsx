import * as S from './styles'
import * as Icon from 'lucide-react'
import { MenuProps } from './types'
import { Logo } from '../Logo'

export const Menu = (props: MenuProps) => (
  <S.Wrapper {...props}>
    <S.IconWrapper aria-label="open menu">
      <Icon.Menu />
    </S.IconWrapper>

    <S.LogoWrapper>
      <Logo $hideOnMobile />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper aria-label="search">
        <Icon.Search />
      </S.IconWrapper>

      <S.IconWrapper aria-label="open shopping cart">
        <Icon.ShoppingCart />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)
