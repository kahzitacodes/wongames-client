'use client'

import { Card } from '../Card'
import { Slider } from '../Slider'
import { SliderSettings } from '../Slider/types'
import * as S from './styles'
import * as Icon from 'lucide-react'
import { CardSliderProps } from './types'
import { CustomArrowProps } from 'react-slick'

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div
    {...props}
    className={
      'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={slideCount && currentSlide === 0 ? true : false}
  >
    <Icon.ChevronLeft aria-label="previous items" size={28} />
  </div>
)

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <div
    {...props}
    className={
      'slick-next slick-arrow' +
      (currentSlide === Math.ceil(slideCount! / 4) ? ' slick-disabled' : '')
    }
    aria-hidden="true"
    aria-disabled={currentSlide === Math.ceil(slideCount! / 4) ? true : false}
  >
    <Icon.ChevronRight aria-label="next items" size={28} />
  </div>
)

const settings: SliderSettings = {
  slidesToShow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export const CardSlider = ({ items, color = 'black' }: CardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
