import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  backgrounds: {
    values: [
      { name: 'dark', value: theme.colors.bg },
      { name: 'light', value: theme.colors.white }
    ],
    default: 'dark'
  }
}
