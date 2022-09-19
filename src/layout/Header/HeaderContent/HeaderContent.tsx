import { memo, useContext } from 'react'

import { CurrentCardContext } from '@/context/AppContext'

import { Button } from '@/components/Button/Button'

import stl from '../header.module.scss'

import s from './header-content.module.scss'
import BorderSvg from './images/Subtract.svg'

const HeaderContent = () => {
	const currentCard = useContext(CurrentCardContext)

	const Content = () => {
		switch (currentCard) {
			case undefined:
				return (
					<div className={s.index}>
						<div className={s.index__title}>Workforce Survey</div>
						<p className={s.index__text}>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi
						</p>
						<Button className={s.index__button} appearance="primary">
							Start Now
						</Button>
						<BorderSvg />
					</div>
				)

			default:
				return (
					<div className={s.inner}>
						<h4 className={s.inner__title}>{currentCard.title}</h4>
					</div>
				)
		}
	}

	return <div className={stl.header__content}> {<Content />}</div>
}

export default memo(HeaderContent)
