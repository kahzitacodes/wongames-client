import { Meta, StoryFn } from '@storybook/react'
import { Menu } from '.'
import { MenuProps } from './types'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark'
  }
}
