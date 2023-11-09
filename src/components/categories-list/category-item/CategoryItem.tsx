import Column from '@/components/ui/column/Column'
import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryItem.module.scss'

interface ICategoryItem {
	item: ICategory
}

const CategoryItem: FC<ICategoryItem> = ({ item }) => {
	return (
		<Column className={styles.item} size={2}>
			<Link to={`categories/${item.id}`} className={styles.item}>
				<img className={styles.img} src={item.image} alt={item.name} />

				<p className={styles.name}>{item.name}</p>
			</Link>
		</Column>
	)
}

export default CategoryItem
