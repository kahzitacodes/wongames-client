import { RibbonColors } from '../Ribbon/types'

export type CardProps = {
  title: string
  img: string
  developer: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFavorite?: () => void
  ribbon?: string
  ribbonColor?: RibbonColors
}
