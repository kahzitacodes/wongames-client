import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render an white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render an black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#05061A'
    })
  })

  it('should render a heading with border left', () => {
    renderWithTheme(<Heading $borderLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.6rem solid #F366A7'
    })
  })

  it('should render a heading with border bottom', () => {
    renderWithTheme(<Heading $borderBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.6rem solid #F366A7',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a small size heading ', () => {
    renderWithTheme(
      <Heading size="sm" $borderBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with border in the accent color', () => {
    renderWithTheme(
      <Heading $borderColor="accent" $borderLeft $borderBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.6rem solid #2496FF'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.6rem solid #2496FF',
      {
        modifier: '::after'
      }
    )
  })
})
