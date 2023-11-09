import Layout from '@/components/layout/Layout'
import Categories from '@/components/layout/categories/Categories'
import ProductInfo from '@/components/product-info/ProductInfo'
import Row from '@/components/ui/row/Row'
import { FC } from 'react'

const ProductDetails: FC = () => {
	return (
		<Layout>
			<Row className='items-start'>
				<Categories />
				<ProductInfo />
			</Row>
		</Layout>
	)
}

export default ProductDetails
