import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  $fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes
