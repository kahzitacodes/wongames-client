import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import { Parameters } from '@storybook/react'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]

export const parameters: Parameters = {
  backgrounds: {
    values: [
      { name: 'dark', value: theme.colors.bg },
      { name: 'light', value: theme.colors.white }
    ],
    default: 'dark'
  }
}
