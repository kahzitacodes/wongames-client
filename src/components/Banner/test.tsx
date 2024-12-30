import { screen } from '@testing-library/react'

import { Banner } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        title="My title"
        subTitle="The subtitle"
        buttonLabel="See details"
        buttonLink="/details"
        img="https://unsplash.com/pt-br/fotografias/uma-montanha-coberta-de-neve-e-nuvens-a-noite-Mud9nLcOwZY"
      />
    )

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/the subtitle/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /my title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
