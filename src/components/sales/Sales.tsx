import { FC } from 'react'
import Column from '../ui/column/Column'
import styles from './Sales.module.scss'

interface ISales {}

const Sales: FC<ISales> = ({}) => {
	return (
		<Column size={9}>
			<div className={styles.sales}>
				<h1 className={styles.title}>BIG SALE 20%</h1>
				<div className={styles.row}>
					<div className={styles.body}>
						<h3 className={styles.subtitle}>the bestseller of 2022</h3>
						<h2 className={styles.mainTitle}>
							LENNON r2d2 with NVIDIA 5090 TI
						</h2>
						<button className='button'>Shop Now</button>
					</div>

					<div className={styles.img}>
						<img src='images/sales/product-1.png' alt='product' />
					</div>
				</div>
			</div>
		</Column>
	)
}

export default Sales
