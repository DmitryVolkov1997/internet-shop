import { useAppDispatch } from '@/hooks/redux-hooks'
import { removeFromBasket } from '@/store/cart-slice/cartSlice'
import { RootState } from '@/store/store'
import { IProduct } from '@/types/product.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import { FC } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector } from 'react-redux'
import styles from './OrderItem.module.scss'
import QuantityCounter from './quantity-counter/QuantityCounter'

interface IOrderItem {
	item: IProduct
}

const OrderItem: FC<IOrderItem> = ({ item }) => {
	const dispatch = useAppDispatch()
	const { orders } = useSelector((state: RootState) => state.cart)
	// const totalPrice = orders.reduce((acc, el) => {
	// 	if (el.id === item.id && item.quantity) {
	// 		return acc + item.price * item.quantity
	// 	}

	// 	return acc
	// }, 0)
	const totalPrice = orders.reduce((acc, order) => {
		if (order.id === item.id && order.quantity) {
			return acc + order.price * order.quantity
		}

		return acc
	}, 0)

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<img className={styles.img} src={item.images[0]} alt={item.title} />
				<div className={styles.body}>
					<h6 className={styles.title}>{item.title}</h6>
					<p className={styles.subtitle}>{item.category.name}</p>
				</div>
			</div>
			<p className={styles.price}>{formatToCurrency(item.price)}</p>
			<QuantityCounter order={item} />
			<p className={styles.total}>{formatToCurrency(totalPrice)}</p>
			<button
				className={styles.delete}
				onClick={() => dispatch(removeFromBasket({ id: item.id }))}
			>
				<MdDeleteForever size={25} />
			</button>
		</div>
	)
}

export default OrderItem
