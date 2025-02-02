import { screen } from '@testing-library/react'

import { Highlight } from '.'
import * as S from './styles'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'Title',
  subtitle: 'The subtitle',
  buttonLabel: 'Buy now',
  buttonLink: '#',
  $bgImage: '/img/red-dead-bg.png'
}

describe('<Highlight />', () => {
  it('should render text and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
    expect(screen.getByText(/the subtitle/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.$bgImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight floatImage="/float-img.png" {...props} />)

    expect(screen.getByRole('img', { name: /Title/i })).toHaveAttribute(
      'src',
      '/float-img.png'
    )
  })

  it('should render content in the end by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render content in the start', () => {
    const { container } = renderWithTheme(
      <Highlight $alignment="start" {...props} />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
