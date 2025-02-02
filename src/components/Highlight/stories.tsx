import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const Default: StoryObj<typeof Highlight> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: StoryObj<typeof Highlight> = {
  args: {
    floatImage: '/img/red-dead-float.png'
  },
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
}
