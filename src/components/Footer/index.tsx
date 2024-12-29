import Link from 'next/link'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import * as S from './styles'

export const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading size="sm" $borderBottom bordercolor="accent" color="black">
          Contact
        </Heading>

        <a href="mailto:contact@wongames.gg">suporte@wongames.gg</a>
      </S.Column>

      <S.Column>
        <Heading size="sm" $borderBottom bordercolor="accent" color="black">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="-blank" rel="noopenner, noreferrer">
            Instagram
          </a>

          <a href="#" target="-blank" rel="noopenner, noreferrer">
            Twitter
          </a>

          <a href="#" target="-blank" rel="noopenner, noreferrer">
            YouTube
          </a>

          <a href="#" target="-blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading size="sm" $borderBottom bordercolor="accent" color="black">
          Links
        </Heading>

        <nav aria-labelledby="social media">
          <Link href="#">Loja</Link>
          <Link href="#">Explorar</Link>
          <Link href="#">Buscar</Link>
          <Link href="#">FAQ</Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading size="sm" $borderBottom bordercolor="accent" color="black">
          Location
        </Heading>

        <address>
          <span>Rua 7 de Maio</span>
          <span>527 - 89020330</span>
          <span>Rio de Janeiro, Brasil</span>
        </address>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2025 © Todos os Direitos Reservados</S.Copyright>
  </S.Wrapper>
)
