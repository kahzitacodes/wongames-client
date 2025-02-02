import { BannerProps } from '@/components/Banner/types'
import { CardProps } from '@/components/Card/types'
import { HighlightProps } from '@/components/Highlight/types'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: CardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: CardProps[]
  upcomingGames: CardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: CardProps[]
  freeGames: CardProps[]
  freeHighlight: HighlightProps
}
