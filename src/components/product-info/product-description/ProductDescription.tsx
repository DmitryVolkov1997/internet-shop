import Column from '@/components/ui/column/Column'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { addOrders, removeFromBasket } from '@/store/cart-slice/cartSlice'
import { RootState } from '@/store/store'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { FcPlus } from 'react-icons/fc'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './ProductDescription.module.scss'
import ProductVariations from './product-variations/ProductVariations'

interface IProductDescription {
	info: IProduct
}

const ProductDescription: FC<IProductDescription> = ({ info }) => {
	const dispatch = useAppDispatch()
	const { orders } = useSelector((state: RootState) => state.cart)

	const isOrderInBasket = orders.find(order => order.id === info.id)

	return (
		<Column size={12} isCenter={false}>
			<div className={styles.description}>
				<h3 className={styles.title}>{info.title}</h3>
				<p className={styles.price}>599$</p>
				<div className={styles.color}>
					Color:
					<span>Green</span>
				</div>
				<ProductVariations />
				<p className={styles.text}>{info?.description}</p>
				<div className={styles.row}>
					{!isOrderInBasket ? (
						<button
							className='button mr-4 flex items-center gap-x-3'
							onClick={() => dispatch(addOrders({ order: info }))}
						>
							<span>Add to cart</span>
							<FcPlus size={25} />
						</button>
					) : (
						<button
							className='button mr-4 flex items-center gap-x-3'
							onClick={() => dispatch(removeFromBasket({ id: info.id }))}
						>
							<span>Remove from basket</span>
							<MdDeleteForever size={25} color='red' />
						</button>
					)}
				</div>
				<Link className='text-right mt-auto' to='/'>
					Return to store
				</Link>
			</div>
		</Column>
	)
}

export default ProductDescription
