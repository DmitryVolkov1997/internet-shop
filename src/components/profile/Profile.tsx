import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import styles from './Profile.module.scss'
import SignIn from './signin/SignIn'
import SignUp from './signup/SignUp'

interface IProfile
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggleDrawer: () => void
}

const Profile: FC<IProfile> = ({ toggleDrawer, className }) => {
	const [isShowRegister, setIsShowRegister] = useState<boolean>(true)

	const toggleForm = () => {
		setIsShowRegister(!isShowRegister)
	}

	return (
		<div className={cn(styles.profile, className)}>
			{isShowRegister && (
				<SignUp toggleForm={toggleForm} toggleDrawer={toggleDrawer} />
			)}
			{!isShowRegister && (
				<SignIn toggleForm={toggleForm} toggleDrawer={toggleDrawer} />
			)}
		</div>
	)
}

export default Profile
