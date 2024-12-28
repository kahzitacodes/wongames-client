import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'
import { HeadingProps } from './types'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'Won Games',
    color: 'white',
    $borderLeft: false,
    $borderBottom: false
  }
}
