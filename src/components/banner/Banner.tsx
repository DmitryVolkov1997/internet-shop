import cn from 'classnames'
import { FC } from 'react'
import Column from '../ui/column/Column'
import styles from './Banner.module.scss'

interface IBanner {}

const Banner: FC<IBanner> = ({}) => {
	return (
		<Column className={styles.banner} size={12} isCenter={false}>
			<div className='flex justify-between'>
				<div className={styles.left}>
					<div className={styles.year}>NEW YEAR</div>
					<div className={styles.sale}>SALE</div>
					<button className='button'>See more</button>
				</div>

				<div className={cn(styles.right)}>
					<img
						className={styles.img}
						src='/images/banner/banner-bg.png'
						alt=''
					/>

					<p className={styles.text}>
						save up to <span>50%</span> off
					</p>
				</div>
			</div>
		</Column>
	)
}

export default Banner
