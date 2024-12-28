import { DefaultBreakpoints } from 'styled-media-query'

export type Breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  $greaterThan?: Breakpoint
  $lessThan?: Breakpoint
}
