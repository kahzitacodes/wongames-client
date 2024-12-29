import { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { ShoppingCart } from 'lucide-react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now'
  }
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
    icon: <ShoppingCart />,
    size: 'md',
    $fullWidth: false
  }
}

export const IconOnly: StoryObj<typeof Button> = {
  args: {
    icon: <ShoppingCart />,
    size: 'md',
    $fullWidth: false
  }
}
