import { MenuHTMLAttributes } from 'react'

import s from './navigation.module.scss'

interface IProps extends MenuHTMLAttributes<HTMLMenuElement> {}

const Navigation = ({ className }: IProps) => {
	return (
		<nav className={className}>
			<ul className={s.menu}>
				<li className={s.menu__item}>
					<a className={s.menu__link} href="#">
						what we do
					</a>
				</li>
				<li className={s.menu__item}>
					<a className={s.menu__link} href="#">
						our work
					</a>
				</li>
				<li className={s.menu__item}>
					<a className={s.menu__link} href="#">
						seo insights
					</a>
				</li>
				<li className={s.menu__item}>
					<a className={s.menu__link} href="#">
						about us
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
