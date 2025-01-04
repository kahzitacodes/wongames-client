import 'match-media-mock'
import { renderWithTheme } from '@/utils/tests/helpers'
import { BannerSlider } from '.'
import { screen } from '@testing-library/react'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=1000',
    title: 'Defy death 1',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images.unsplash.com/photo-1732738164570-0e9d4684c30a?w=1000',
    title: 'Defy death 2',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render a vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render one active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(
      items.length
    )
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-dots li')).toHaveLength(
      items.length
    )
  })
})
