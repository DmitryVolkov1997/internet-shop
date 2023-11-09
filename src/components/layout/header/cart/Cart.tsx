import Column from '@/components/ui/column/Column'
import { RootState } from '@/store/store'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as BasketLogo } from '../../../../assets/images/basket.svg'
import { ReactComponent as HeartLogo } from '../../../../assets/images/heart.svg'
import styles from './Cart.module.scss'

interface ICart {}

const Cart: FC<ICart> = ({}) => {
	const { orders } = useSelector((state: RootState) => state.cart)

	return (
		<Column size={2}>
			<div className={styles.cart}>
				<Link to='/'>
					<HeartLogo />
				</Link>

				<Link to='/cart'>
					<button className={styles.basket}>
						<BasketLogo />

						{!!orders.length && (
							<span className={styles.circle}>{orders.length}</span>
						)}
					</button>
				</Link>
			</div>
		</Column>
	)
}

export default Cart
