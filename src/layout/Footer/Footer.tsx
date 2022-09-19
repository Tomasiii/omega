import cn from 'classnames'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

import s from './footer.module.scss'
import FbIcon from './icons/facebook.svg'
import LnIcon from './icons/ln.svg'
import TwIcon from './icons/tw.svg'

interface IProps extends HTMLAttributes<HTMLElement> {}

const Footer = ({ className }: IProps) => {
	return (
		<footer className={className}>
			<div className={cn(s.footer, 'footer__container')}>
				<div className={s.footer__date}>
					Ukraine 2000-{`${new Date().getFullYear()}`}
				</div>
				<address className={s.footer__contacts}>
					<Link href="#">
						<a aria-label={'Go to official facebook'}>
							<FbIcon />
						</a>
					</Link>
					<Link href="#">
						<a aria-label={'Go to official twitter'}>
							<TwIcon />
						</a>
					</Link>
					<Link href="#">
						<a aria-label={'Go to official linkedin'}>
							<LnIcon />
						</a>
					</Link>
				</address>
			</div>
		</footer>
	)
}

export default Footer
