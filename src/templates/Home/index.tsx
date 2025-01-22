import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Heading } from '@/components/Heading'

export const Home = (props: { heading?: string }) => {
  console.log(props?.heading)
  return (
    <section>
      <Container>
        <menu />
      </Container>
      <Container>
        <Heading $borderColor="accent" $borderLeft color="black">
          News
        </Heading>
      </Container>
      <Container>
        <Heading $borderColor="accent" $borderLeft>
          Most popular
          {JSON.stringify(props?.heading)}
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
}
