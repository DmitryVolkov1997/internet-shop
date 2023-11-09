import { useAppDispatch } from '@/hooks/redux-hooks'
import { toggleDrawer } from '@/store/drawer-slice/drawerSlice'
import { RootState } from '@/store/store'
import cn from 'classnames'
import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import Profile from '../profile/Profile'
import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	const dispatch = useAppDispatch()
	const { isShowDrawer } = useSelector((state: RootState) => state.drawer)

	const onClickToggleDrawer = () => {
		dispatch(toggleDrawer())
	}

	return (
		<div className={styles.layout}>
			<Header />
			<Profile
				className={cn(styles.profile, {
					[styles.isShowDrawer]: isShowDrawer,
				})}
				toggleDrawer={onClickToggleDrawer}
			/>

			<main className={styles.main}>{children}</main>

			<Footer className='mt-auto' />
		</div>
	)
}

export default Layout
