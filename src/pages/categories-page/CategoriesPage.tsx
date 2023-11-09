import Layout from '@/components/layout/Layout'
import Products from '@/components/products/Products'
import Row from '@/components/ui/row/Row'
import { useProducts } from '@/hooks/use-products'
import { RootState } from '@/store/store'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CategoriesPage: FC = ({}) => {
	const { productName, priceFrom, priceTo } = useSelector(
		(state: RootState) => state.filter
	)
	const { data: products, isSuccess, isLoading } = useProducts(0, productName)
	const [count, setCount] = useState(5)
	const { id } = useParams()
	const title =
		isSuccess && id
			? products.find(p => p.category.id === +id)?.category.name || ''
			: ''

	const filteredProducts =
		(isSuccess &&
			id &&
			products
				.filter(product => {
					const isMatchingCategoryTitle =
						product.category.name.toLowerCase() === title.toLowerCase()

					if (isMatchingCategoryTitle) {
						if (priceFrom && priceTo) {
							return product.price >= +priceFrom && product.price <= +priceTo
						} else if (priceFrom) {
							return product.price >= +priceFrom
						} else if (priceTo) {
							return product.price <= +priceTo
						} else {
							return true
						}
					}
					return false
				})
				.slice(0, count)) ||
		[]

	return (
		<Layout>
			<Row>
				<Products
					title={title}
					products={filteredProducts}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isFilter
					showSeeMoreButton={count === filteredProducts.length}
					changeCountPage={() => setCount(prevState => prevState + 5)}
				/>
			</Row>
		</Layout>
	)
}

export default CategoriesPage
