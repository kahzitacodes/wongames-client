import { screen } from '@testing-library/react'

import { Banner } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'My title',
  subTitle: 'The subtitle',
  buttonLabel: 'See details',
  buttonLink: '/details',
  img: 'https://unsplash.com/pt-br/fotografias/uma-montanha-coberta-de-neve-e-nuvens-a-noite-Mud9nLcOwZY'
}

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/the subtitle/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /my title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner {...props} ribbon="My ribbon" ribbonSize="sm" ribbonColor="red" />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#FB6E78'
    })

    expect(ribbon).toHaveStyle({
      height: '2.8rem',
      'font-size': '1.2rem'
    })
  })
})
