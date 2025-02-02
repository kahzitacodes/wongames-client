import { Meta, StoryObj } from '@storybook/react'
import { CardSlider } from '.'
import items from './mock'

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
