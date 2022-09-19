import cn from 'classnames'
import { ReactNode } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import s from './layout.module.scss'

interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<div className={s.wrapper}>
			<Header className={s.header} />
			<main className={cn(s.body, 'body__container')}>{children}</main>
			<Footer className={s.footer} />
		</div>
	)
}

export default Layout
