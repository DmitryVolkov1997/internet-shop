import { IProduct } from '@/types/product.interface'
import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import ProductsFilter from '../products-filter/ProductsFilter'
import Column from '../ui/column/Column'
import Spinner from '../ui/spinner/Spinner'
import styles from './Products.module.scss'
import ProductItem from './product-item/ProductItem'

interface IProducts
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	products: IProduct[]
	isSuccess: boolean
	isLoading: boolean
	isFilter?: boolean
	showSeeMoreButton?: boolean
	changeCountPage?: () => void
}

const Products: FC<IProducts> = ({
	title,
	className,
	isLoading,
	isSuccess,
	products,
	isFilter = false,
	showSeeMoreButton = false,
	changeCountPage,
}) => {
	return (
		<Column className={cn(styles.products, className)} size={12}>
			<div className='center'>
				<h1 className='title'>{title}</h1>
			</div>

			{isFilter && <ProductsFilter />}

			<div className={styles.row}>
				{isSuccess && !!products.length ? (
					products.map(item => <ProductItem key={item.id} item={item} />)
				) : isLoading ? (
					<Spinner />
				) : (
					<div className='flex items-center gap-x-6'>
						<h1 className='title'>No results</h1>
					</div>
				)}
			</div>

			<div className='flex justify-center my-6'>
				{showSeeMoreButton && (
					<button className='button' onClick={changeCountPage}>
						See more
					</button>
				)}
			</div>
		</Column>
	)
}

export default Products
