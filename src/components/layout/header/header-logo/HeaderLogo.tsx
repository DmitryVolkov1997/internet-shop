import Column from '@/components/ui/column/Column'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderLogo.module.scss'

interface IHeaderLogo {}

const HeaderLogo: FC<IHeaderLogo> = ({}) => {
	return (
		<Column size={3}>
			<Link to='/'>
				<img className={styles.logo} src='/images/logo.svg' alt='logo' />
			</Link>
		</Column>
	)
}

export default HeaderLogo
