import 'match-media-mock'

import { CardSlider } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<CardSlider />', () => {
  it('should render 4 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color is passed', () => {
    renderWithTheme(<CardSlider color="white" items={items} />)

    expect(screen.getByLabelText(/previous items/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next items/i)).toBeInTheDocument()
  })
})
