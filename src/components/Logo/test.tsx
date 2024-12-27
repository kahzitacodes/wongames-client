import { renderWithTheme } from '@/utils/tests/helpers'
import { Logo } from '.'
import { screen } from '@testing-library/react'

describe('<Logo />', () => {
  it('should render an white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render an black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#05061A'
    })
  })

  it('should render the default logo size', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo when size large is passed', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo $hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:  768px)'
      }
    )
  })
})
