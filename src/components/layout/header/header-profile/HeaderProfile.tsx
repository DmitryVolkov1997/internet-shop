import Column from '@/components/ui/column/Column'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { toggleDrawer } from '@/store/drawer-slice/drawerSlice'
import { RootState } from '@/store/store'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './HeaderProfile.module.scss'

interface IHeaderProfile {}

const HeaderProfile: FC<IHeaderProfile> = ({}) => {
	const { currentUser } = useSelector((state: RootState) => state.user)
	const dispatch = useAppDispatch()

	return (
		<Column size={3}>
			<div className={styles.profile} onClick={() => dispatch(toggleDrawer())}>
				<Link className={styles.logo} to='/'>
					<img
						className={styles.photo}
						src={
							currentUser?.avatar ? currentUser.avatar : '/images/avatar.svg'
						}
						alt='avatar'
					/>
				</Link>

				<Link className={styles.link} to='/'>
					<span className={styles.name}>
						{currentUser?.name ? currentUser.name : 'Sign in'}
					</span>
				</Link>
			</div>
		</Column>
	)
}

export default HeaderProfile
