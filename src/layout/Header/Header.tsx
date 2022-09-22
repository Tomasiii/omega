import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes, useCallback, useState } from 'react'

import HeaderContent from './HeaderContent/HeaderContent'
import HeaderIcon from './HeaderIcon/HeaderIcon'
import Navigation from './Navigation/Navigation'
import s from './header.module.scss'

interface IProps extends HTMLAttributes<HTMLElement> {}

const Header = ({ className, ...props }: IProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = useCallback(() => {
		setIsOpen((prevState) => !prevState)
	}, [])

	return (
		<header className={className} {...props}>
			<div className={'header__container'}>
				<div className={s.header__top}>
					<Link href="/">
						<a aria-label="Logotype" className={s.header__logo}>
							<Image
								src="/images/logo.png"
								width={184}
								height={37}
								alt="Logo"
							/>
						</a>
					</Link>
					<Navigation
						className={cn(s.header__navigation, {
							[s.header__navigation_active]: isOpen,
						})}
					/>
					<HeaderIcon
						className={s.header__icon}
						icon={isOpen ? 'close' : 'menu'}
						onClick={toggleMenu}
					/>
				</div>
				<HeaderContent />
			</div>
		</header>
	)
}

export default Header
