import { useProduct } from '@/hooks/use-product'
import { useProducts } from '@/hooks/use-products'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../products/Products'
import Column from '../ui/column/Column'
import Spinner from '../ui/spinner/Spinner'
import styles from './ProductInfo.module.scss'
import ProductDescription from './product-description/ProductDescription'
import ProductSlider from './product-slider/ProductSlider'

interface IProductInfo {}

const ProductInfo: FC<IProductInfo> = ({}) => {
	const { id } = useParams()

	const { data: info, isSuccess, isLoading } = useProduct(id)

	const {
		data: products,
		isSuccess: isSuccessProducts,
		isLoading: isLoadingProducts,
	} = useProducts()

	const filteredRelated =
		(isSuccessProducts &&
			id &&
			isSuccess &&
			products
				.filter(p => p.category.name === info.category.name)
				.slice(0, 5)) ||
		[]

	return (
		<>
			<Column className='ml-5' size={9} isCenter={false}>
				<div className={styles.info}>
					{isLoading && (
						<div className='center w-full'>
							<Spinner />
						</div>
					)}
					{isSuccess && <ProductSlider info={info} />}
					{isSuccess && <ProductDescription info={info} />}
				</div>
			</Column>

			{isSuccessProducts && (
				<Products
					className='mb-20'
					title='Related products'
					products={filteredRelated}
					isSuccess={isSuccessProducts}
					isLoading={isLoadingProducts}
				/>
			)}
		</>
	)
}

export default ProductInfo
