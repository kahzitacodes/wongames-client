import { Meta, StoryObj } from '@storybook/react'
import { Slider } from '.'
import { Settings } from 'react-slick'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`

export const Default: StoryObj<typeof Slider> = {
  render: () => (
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  slidesToShow: 1
}

export const Vertical: StoryObj<typeof Slider> = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
    </Slider>
  )
}
