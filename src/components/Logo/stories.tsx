import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'
import { LogoProps } from './types'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Default: StoryObj<LogoProps> = {
  args: {
    color: 'white',
    size: 'medium'
  }
}