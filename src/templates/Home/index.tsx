import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'

export const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading $borderColor="accent" $borderLeft color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading $borderColor="accent" $borderLeft>
        Most popular
      </Heading>
    </Container>

    <Container>
      <Heading $borderColor="accent" $borderLeft>
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading $borderColor="accent" $borderLeft>
        Free games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)
