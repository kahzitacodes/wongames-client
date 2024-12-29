import { Meta, StoryObj } from '@storybook/react'
import { Menu } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryObj<typeof Menu> = {
  parameters: {
    layout: 'fullscreen',
    background: {
      default: 'dark'
    }
  }
}
