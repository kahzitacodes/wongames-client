'use client'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'
import { HomeTemplateProps } from './types'
import { BannerSlider } from '@/components/BannerSlider'
import { CardSlider } from '@/components/CardSlider'
import { Highlight } from '@/components/Highlight'
import { Menu } from '@/components/Menu'
import * as S from './styles'

export const Home = ({
  banners,
  freeHighlight,
  freeGames,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionLight>
        <Container>
          <Heading $borderColor="accent" $borderLeft color="white">
            News
          </Heading>
          <CardSlider items={newGames} />
        </Container>
      </S.SectionLight>

      <S.Section>
        <Container>
          <Heading $borderColor="accent" $borderLeft>
            Most popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <CardSlider items={mostPopularGames} color="white" />
        </Container>
      </S.Section>

      <S.Section>
        <Container>
          <Heading $borderColor="accent" $borderLeft>
            Upcoming
          </Heading>

          <CardSlider items={upcomingGames} color="white" />
          <Highlight {...upcomingHighlight} />
          <CardSlider items={upcomingMoreGames} color="white" />
        </Container>
      </S.Section>

      <S.Section>
        <Container>
          <Heading $borderColor="accent" $borderLeft>
            Free games
          </Heading>
          <Highlight {...freeHighlight} />
          <CardSlider items={freeGames} color="white" />
        </Container>
      </S.Section>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}
