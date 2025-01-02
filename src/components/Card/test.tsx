import { fireEvent, screen } from '@testing-library/react'

import { Card } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import theme from '@/styles/theme'

const props = {
  title: 'The Witcher 2',
  developer: 'Developer',
  img: '/img/the-witcher-2.jpg',
  price: 'R$ 235,00'
}

describe('<Card />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Card {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.developer)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render normal price', () => {
    renderWithTheme(<Card {...props} />)
    const price = screen.getByText(props.price)

    expect(price).toHaveStyle({
      color: theme.colors.accent
    })
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render old price with line-through', () => {
    const promotionalPrice = 'R$ 100,00'

    renderWithTheme(<Card {...props} promotionalPrice={promotionalPrice} />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(promotionalPrice)).toHaveStyle({
      color: theme.colors.accent
    })
  })

  it('should render filled favorite icon when favorite is true', () => {
    renderWithTheme(<Card {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method whem favorite icon is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<Card {...props} onFavorite={onFavorite} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toHaveBeenCalled()
  })

  it('should render a ribbon', () => {
    renderWithTheme(<Card {...props} ribbon="My ribbon" ribbonColor="red" />)

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.red
    })

    expect(ribbon).toHaveStyle({
      height: '2.8rem',
      'font-size': '1.2rem'
    })
  })
})
