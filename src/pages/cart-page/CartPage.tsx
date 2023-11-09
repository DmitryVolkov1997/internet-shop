import Layout from '@/components/layout/Layout'
import Categories from '@/components/layout/categories/Categories'
import Column from '@/components/ui/column/Column'
import Row from '@/components/ui/row/Row'
import { RootState } from '@/store/store'
import { formatToCurrency } from '@/utils/format-to-currency'
import cn from 'classnames'
import { FC } from 'react'
import { PiShoppingCartLight } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import styles from './CartPage.module.scss'
import OrdersList from './orders-list/OrdersList'

const CartPage: FC = () => {
	const { orders } = useSelector((state: RootState) => state.cart)

	const totalPrice = orders.reduce((acc, order) => {
		if (order.quantity) {
			return acc + order.price * order.quantity
		}

		return acc
	}, 0)

	return (
		<Layout>
			<Row className='items-start'>
				<Categories />

				<Column
					className='bg-dark-primary p-5 rounded-md mb-10 ml-6'
					size={9}
					isCenter={false}
				>
					<h1 className={cn(styles.title, 'title')}>Your cart</h1>
					{orders.length ? (
						<OrdersList orders={orders} />
					) : (
						<div className={styles.row}>
							<p className={styles.text}>Here is empty!!!</p>
							<PiShoppingCartLight size={100} />
						</div>
					)}

					<div className={styles.bottom}>
						<p className={styles.totalPrice}>
							Total price: &nbsp;<span>{formatToCurrency(totalPrice)}</span>
						</p>
						<button className='button'>Proceed to checkout</button>
					</div>
				</Column>
			</Row>
		</Layout>
	)
}

export default CartPage
