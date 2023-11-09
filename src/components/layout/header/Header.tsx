import Row from '@/components/ui/row/Row'
import Search from '@/components/ui/search/Search'
import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Header.module.scss'
import Cart from './cart/Cart'
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderProfile from './header-profile/HeaderProfile'

interface IHeader
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: FC<IHeader> = ({ className }) => {
	return (
		<header className={cn(styles.header, className)}>
			<Row>
				<HeaderLogo />
				<HeaderProfile />
				<Search />
				<Cart />
			</Row>
		</header>
	)
}

export default Header
