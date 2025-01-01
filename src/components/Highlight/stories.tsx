import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: "Come see John's new adventure",
    buttonLabel: 'Buy now',
    buttonLink: '#',
    $bgImage: '/img/red-dead-bg.png'
  }
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
