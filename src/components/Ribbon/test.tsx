import { screen } from '@testing-library/react'

import { Ribbon } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Ribbon />', () => {
  it('should render the Ribbon', () => {
    const { container } = renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Ribbon with accent color by default', () => {
    const { container } = renderWithTheme(<Ribbon>Best seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#2496FF'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Ribbon with danger color when color is passed', () => {
    const { container } = renderWithTheme(
      <Ribbon color="red">Best seller</Ribbon>
    )

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#FB6E78'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Ribbon default size', () => {
    const { container } = renderWithTheme(
      <Ribbon color="accent">Best seller</Ribbon>
    )

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
