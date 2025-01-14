export type HeadingProps = {
  children: string | React.ReactNode
  color?: 'white' | 'black'
  $borderLeft?: boolean
  $borderBottom?: boolean
  size?: HeadingSizes
  $borderColor?: HeadingBorderColors
}

export type HeadingBorderColors = 'brand' | 'accent'
export type HeadingSizes = 'sm' | 'md'
