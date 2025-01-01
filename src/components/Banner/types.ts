import { RibbonColors, RibbonSizes } from '../Ribbon/types'

export type BannerProps = {
  img: string
  title: string
  subTitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}
