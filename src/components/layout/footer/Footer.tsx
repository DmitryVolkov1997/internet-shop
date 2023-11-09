import Row from '@/components/ui/row/Row'
import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { ReactComponent as FacebookIcon } from '../../../assets/images/social/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../../assets/images/social/instagram.svg'
import { ReactComponent as YouTubeIcon } from '../../../assets/images/social/youtube.svg'
import HeaderLogo from '../header/header-logo/HeaderLogo'
import styles from './Footer.module.scss'

interface IFooter
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<IFooter> = ({ className }) => {
	return (
		<div className={cn(styles.footer, className)}>
			<Row className={styles.row}>
				<HeaderLogo />

				<p className={styles.text}>
					Developed by <span>Volkov</span>
				</p>

				<div className='flex gap-x-4'>
					<YouTubeIcon className='cursor-pointer' />
					<FacebookIcon className='cursor-pointer' />
					<InstagramIcon className='cursor-pointer' />
				</div>
			</Row>
		</div>
	)
}

export default Footer
