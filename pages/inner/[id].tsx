import { GetStaticProps, NextPage } from 'next'

import { Button, Cards } from '@/components'

import { AppService } from '@/services/app.service'

import s from '@/assets/styles/pages/inner/[id].module.scss'

import SEO from '@/utils/seo/SEO'
import { ICard, ICards } from '@/utils/types/app.types'

type IProps = ICards & { currentCard: ICard }

const Inner: NextPage<IProps> = ({ cards, currentCard }: IProps) => {
	return (
		<>
			<SEO
				title={currentCard.title}
				description={currentCard.text}
				ogTitle={currentCard.title}
			/>
			<section className={s.inner}>
				<div
					className={s.inner__text}
					dangerouslySetInnerHTML={{ __html: currentCard.detailText }}
				></div>
				<Button appearance="primary">Download Full Report</Button>
			</section>
			<Cards cardsItems={cards} />
		</>
	)
}

export async function getStaticPaths() {
	try {
		const { data } = await AppService.getCards()
		return {
			paths: data.cards.map((card) => '/inner/' + card.id),
			fallback: 'blocking',
		}
	} catch {
		return {
			paths: [],
			fallback: 'blocking',
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) return { notFound: true }

	try {
		const { data } = await AppService.getCards()
		const currentCard = data.cards.filter((card) => card.id == params.id)

		if (!currentCard.length) return { notFound: true }
		return {
			props: { cards: data.cards, currentCard: currentCard[0] },
			revalidate: 60,
		}
	} catch {
		return { notFound: true }
	}
}

export default Inner
