import Column from '@/components/ui/column/Column'
import Spinner from '@/components/ui/spinner/Spinner'
import { useCategories } from '@/hooks/use-categories'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'
import CategoryItem from './category-item/CategoryItem'

interface ICategories {}

const Categories: FC<ICategories> = ({}) => {
	const { data: categories, isSuccess, isLoading } = useCategories(5)

	return (
		<Column size={3}>
			<div className={styles.categories}>
				<h1 className={styles.title}>Categories</h1>

				{isLoading && (
					<div className={styles.spinner}>
						<Spinner />
					</div>
				)}

				<ul className={styles.list}>
					{isSuccess &&
						categories.map(category => {
							return <CategoryItem key={category.id} item={category} />
						})}
				</ul>

				<div className={styles.row}>
					<Link to='/help' className={styles.support}>
						Help
					</Link>
					<Link to='/terms' className={styles.terms}>
						Terms & Conditions
					</Link>
				</div>
			</div>
		</Column>
	)
}

export default Categories
