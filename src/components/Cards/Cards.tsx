import {useRouter} from 'next/router'
import Slider from 'react-slick'

import {Card} from '@/components'

import {ICard} from '@/utils/types/app.types'

import s from './cards.module.scss'
import cn from "classnames";

interface IProps {
  cardsItems: ICard[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  className: String(s.cards),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export const Cards = ({cardsItems}: IProps) => {
  const {pathname} = useRouter()
  return (
      <>
        {pathname !== '/' && (
            <div className={s.cards__title}>Related Insights</div>
        )}
        <div className={pathname === '/' ? s.cards : cn(s.cards, s.cards__short)}>
          <div className={s.slick__container_custom}>
            <Slider {...settings}>
              {cardsItems.map((card) => (
                  <Card key={card.src} data={card}/>
              ))}
            </Slider>
          </div>
        </div>
      </>

  )
}
