import { useRouter } from 'next/router'
import { HTMLAttributes } from 'react'
import Slider from 'react-slick'

import { Card } from '@/components'

import { ICard } from '@/utils/types/app.types'

import s from './cards.module.scss'

interface IProps extends HTMLAttributes<HTMLDivElement> {
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

export const Cards = ({ cardsItems, className = '' }: IProps) => {
	const { pathname } = useRouter()
	return (
		<div className={className}>
			{pathname !== '/' && (
				<div className={s.cards__title}>Related Insights</div>
			)}
			<div className={s.slick__container_custom}>
				<Slider {...settings}>
					{cardsItems.map((card) => (
						<Card key={card.src} data={card} />
					))}
				</Slider>
			</div>
		</div>
	)
}
