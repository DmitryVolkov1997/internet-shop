import Banner from '@/components/banner/Banner'
import CategoriesList from '@/components/categories-list/CategoriesList'
import Layout from '@/components/layout/Layout'
import Categories from '@/components/layout/categories/Categories'

import Products from '@/components/products/Products'
import Sales from '@/components/sales/Sales'
import Row from '@/components/ui/row/Row'
import { useProducts } from '@/hooks/use-products'
import { FC } from 'react'

const HomePage: FC = () => {
	const { data: products, isSuccess, isLoading } = useProducts(5)

	return (
		<Layout>
			<Row>
				<Categories />
				<Sales />
				{isSuccess && (
					<Products
						title='Trending'
						products={products}
						isSuccess={isSuccess}
						isLoading={isLoading}
					/>
				)}
				<CategoriesList title='Worth seeing' />
				<Banner />
			</Row>
		</Layout>
	)
}

export default HomePage
