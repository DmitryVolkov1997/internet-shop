import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import styles from './OrdersList.module.scss'
import OrderItem from './order-item/OrderItem'

interface IOrdersList {
	orders: IProduct[]
}

const OrdersList: FC<IOrdersList> = ({ orders }) => {
	return (
		<div className={styles.orders}>
			{orders.map(order => (
				<OrderItem key={order.id} item={order} />
			))}
		</div>
	)
}

export default OrdersList
