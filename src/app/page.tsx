import { Home } from '@/templates/home'
import bannersMock from '@/components/BannerSlider/mock'
import cardSliderMock from '@/components/CardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

async function getStaticData() {
  return {
    banners: bannersMock,
    newGames: cardSliderMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: cardSliderMock,
    upcomingGames: cardSliderMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: cardSliderMock,
    freeGames: cardSliderMock,
    freeHighlight: highlightMock
  }
}

export default async function Page() {
  const staticData = await getStaticData()
  return <Home {...staticData} />
}
