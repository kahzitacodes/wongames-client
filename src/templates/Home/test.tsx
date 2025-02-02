import 'match-media-mock'
import { screen } from '@testing-library/react'

import { Home } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

import bannersMock from '@/components/BannerSlider/mock'
import cardSliderMock from '@/components/CardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [cardSliderMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [cardSliderMock[0]],
  upcomingGames: [cardSliderMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [cardSliderMock[0]],
  freeGames: [cardSliderMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)

    //menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    //logos (menu & footer)
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    //footer
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    //headings
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // card game sliders
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // hightlights
    expect(screen.getAllByText(/red dead is back/i)).toHaveLength(3)
  })
})
