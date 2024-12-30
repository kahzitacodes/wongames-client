import { Meta, StoryObj } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://images.gog-statics.com/13e6b550e16944ad923c38f78afdac27371f5ead8c74960da8ca8ecc0013ecc2.jpg',
    title: 'Uma montanha',
    subTitle: '<p>Imagem de uma paisagem nas <strong>montanhas</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '#'
  }
} as Meta

export const Default: StoryObj<typeof Banner> = {
  parameters: {
    layout: 'fullscreen'
  }
}
