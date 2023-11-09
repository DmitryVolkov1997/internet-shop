import { IProduct } from '@/types/product.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'

interface IProductItem {
	item: IProduct
}

const ProductItem: FC<IProductItem> = ({ item }) => {
	return (
		<Link to={`/product/${item.id}`} className={styles.item}>
			<img className={styles.img} src={item.images[0]} alt={item.title} />

			<div className={styles.body}>
				<h6 className={styles.title}>{item.title}</h6>
				<p className={styles.subtitle}>{item.category.name}</p>

				<div className={styles.bottom}>
					<span className={styles.price}>
						{formatToCurrency(item.price)}
						<span className={styles.oldPrice}>
							{formatToCurrency(Math.floor(item.price * 0.8))}
						</span>
					</span>
				</div>
			</div>
		</Link>
	)
}

export default ProductItem
