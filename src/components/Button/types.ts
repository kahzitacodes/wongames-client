export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  $fullWidth?: boolean
  onClick?: () => (e: React.MouseEvent<HTMLButtonElement>) => void
}
