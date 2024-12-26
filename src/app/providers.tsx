'use client'

import StyledComponentsRegistry from '@/lib/registry'
import theme from '@/styles/theme'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
