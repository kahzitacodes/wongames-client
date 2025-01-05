import type { Metadata } from 'next'
import { Providers } from './providers'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'Your favorite game store!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
