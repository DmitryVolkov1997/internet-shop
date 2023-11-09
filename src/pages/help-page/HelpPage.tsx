import Layout from '@/components/layout/Layout'
import Categories from '@/components/layout/categories/Categories'
import Row from '@/components/ui/row/Row'
import { FC } from 'react'

interface IHelpPage {}

const HelpPage: FC<IHelpPage> = ({}) => {
	return (
		<Layout>
			<Row className='items-start'>
				<Categories />
			</Row>
		</Layout>
	)
}

export default HelpPage
