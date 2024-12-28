import { Meta, StoryFn } from '@storybook/react'
import { Button } from '.'
import { ButtonProps } from './types'
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

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now',
  size: 'md',
  $fullWidth: false
}

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  children: 'Buy now',
  icon: <ShoppingCart />,
  size: 'md',
  $fullWidth: false
}

export const IconOnly: StoryFn<ButtonProps> = (args) => <Button {...args} />

IconOnly.args = {
  icon: <ShoppingCart />,
  size: 'md',
  $fullWidth: false
}
