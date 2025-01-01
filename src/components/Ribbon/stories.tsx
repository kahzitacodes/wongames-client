import { Meta, StoryFn } from '@storybook/react'
import { Ribbon } from '.'
import { RibbonProps } from './types'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryFn<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
