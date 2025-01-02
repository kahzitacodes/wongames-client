import { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'The Witcher 2',
    developer: 'Developer',
    img: '/img/the-witcher-2.jpg',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFavorite: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<typeof Card> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <Card {...args} />
    </div>
  )
}
