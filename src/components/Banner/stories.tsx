import { Meta, StoryObj } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string'
    }
  },
  args: {
    img: 'https://images.gog-statics.com/13e6b550e16944ad923c38f78afdac27371f5ead8c74960da8ca8ecc0013ecc2.jpg',
    title: 'Uma montanha',
    subTitle: '<p>Imagem de uma paisagem nas <strong>montanhas</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '#'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<typeof Banner> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<typeof Banner> = {
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner ribbon="20% OFF" ribbonSize="sm" ribbonColor="red" {...args} />
    </div>
  )
}
