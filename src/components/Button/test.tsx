import { screen } from '@testing-library/react'

import { Button } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import { ShoppingCart } from 'lucide-react'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0 1.6rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size when size is passed', () => {
    renderWithTheme(<Button size="sm">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3.2rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size when size is passed', () => {
    renderWithTheme(<Button size="lg">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4.8rem',
      padding: '0 2.4rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button $fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a icon version', () => {
    renderWithTheme(
      <Button icon={<ShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a icon only version', () => {
    renderWithTheme(
      <Button
        data-testid="button-icon-only"
        icon={<ShoppingCart data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('button-icon-only')).toHaveStyle({
      width: '4rem',
      height: '4rem'
    })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button data-testid="button-icon-only" as="a" href="/link">
        Buy now
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
