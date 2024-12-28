import { Meta, StoryFn } from '@storybook/react'
import { MediaMatch } from '.'
import { MediaMatchProps } from './types'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn<MediaMatchProps> = () => (
  <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
)

export const Mobile: StoryFn<MediaMatchProps> = () => (
  <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
