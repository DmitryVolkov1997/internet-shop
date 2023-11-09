import { useCategories } from '@/hooks/use-categories'
import { FC } from 'react'
import Column from '../ui/column/Column'
import Spinner from '../ui/spinner/Spinner'
import styles from './CategoriesList.module.scss'
import CategoryItem from './category-item/CategoryItem'

interface ICategoriesList {
	title: string
}

const CategoriesList: FC<ICategoriesList> = ({ title }) => {
	const { data: categories, isLoading, isSuccess } = useCategories(5)

	return (
		<Column className={styles.categories} size={12}>
			<div className='center'>
				<h1 className='title'>{title}</h1>
			</div>

			{isLoading && (
				<div className='center'>
					<Spinner />
				</div>
			)}

			<div className={styles.row}>
				{isSuccess &&
					categories.map(item => <CategoryItem key={item.id} item={item} />)}
			</div>
		</Column>
	)
}

export default CategoriesList
