import { useAppDispatch } from '@/hooks/redux-hooks'
import { changeQuantity } from '@/store/cart-slice/cartSlice'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import styles from './QuantityCounter.module.scss'

interface IQuantityCounter {
	order: IProduct
}

const QuantityCounter: FC<IQuantityCounter> = ({ order }) => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.counter}>
			<button
				className={styles.decrement}
				onClick={() =>
					dispatch(changeQuantity({ type: 'DECREMENT', id: order.id }))
				}
			>
				-
			</button>
			<span className={styles.count}>{order.quantity}</span>
			<button
				className={styles.increment}
				onClick={() =>
					dispatch(changeQuantity({ type: 'INCREMENT', id: order.id }))
				}
			>
				+
			</button>
		</div>
	)
}

export default QuantityCounter
