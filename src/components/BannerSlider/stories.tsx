import { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from '.'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?w=1000',
    title: 'Defy death 1',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images.unsplash.com/photo-1732738164570-0e9d4684c30a?w=1000',
    title: 'Defy death 2',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://images.unsplash.com/photo-1731450453043-4730a9b2f2fc?w=1000',
    title: 'Defy death 3',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof BannerSlider> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
