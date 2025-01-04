import { Meta, StoryObj } from '@storybook/react'
import { CardSlider } from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=500',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items },
  parameters: {
    layut: 'fullscreen',
    background: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof CardSlider> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: 'auto' }}>
      <CardSlider {...args} />
    </div>
  )
}
