import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'

import ArrowIcon from './arrow.svg'
import s from './button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	arrow?: 'up' | 'down' | 'none'
}

export const Button = ({
	appearance,
	arrow = 'none',
	children,
	className,
	...props
}: IProps): JSX.Element => {
	return (
		<button
			className={cn(s.button, className, {
				[s.primary]: appearance == 'primary',
				[s.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{arrow !== 'none' && (
				<span
					className={cn(s.arrow, {
						[s.up]: arrow === 'up',
					})}
				>
					<ArrowIcon />
				</span>
			)}
			{children}
		</button>
	)
}
