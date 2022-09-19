import { ButtonHTMLAttributes } from 'react'

import CloseIcon from '@/assets/images/close.svg'
import MenuIcon from '@/assets/images/menu.svg'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: 'menu' | 'close'
}

const HeaderIcon = ({ icon, onClick, className }: IProps) => {
	return (
		<button onClick={onClick} className={className}>
			{icon === 'menu' && <MenuIcon aria-label="Open menu" />}
			{icon === 'close' && <CloseIcon aria-label="Close menu" />}
		</button>
	)
}

export default HeaderIcon
