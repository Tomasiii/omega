import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import {useCallback, useState} from 'react'

import { Button } from '@/components'

import { maxLength } from '@/utils/string/maxLength'
import { ICard } from '@/utils/types/app.types'

import s from './card.module.scss'
import {useRouter} from "next/router";

interface IProps {
	data: ICard
}

export const Card = ({ data }: IProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const { text, title, src, id } = data
	const {pathname} = useRouter()
	const toggleText = useCallback(() => {
		setIsOpen((prevState) => !prevState)
	}, [])

	return (
		<article className={s.card}>
			<Link href={'/inner/' + id}>
				<a aria-label={'Read more about' + title}>
					<Image
						src={src}
						width={274}
						height={167}
						alt={title}
					/>
				</a>
			</Link>
			<div className={s.card__content}>
				<strong className={s.card__title}>{title}</strong>
				<p className={cn(s.card__text, { [s.card__text_open]: isOpen })}>
					{maxLength(text, 212)}
				</p>
				{pathname === '/' && (
					<Button
						appearance="ghost"
						arrow={(isOpen ? 'up' : 'down')}
						onClick={toggleText}
					>
						Show {isOpen ? 'Less' : 'More'}
					</Button>
				)}
			</div>
		</article>
	)
}

