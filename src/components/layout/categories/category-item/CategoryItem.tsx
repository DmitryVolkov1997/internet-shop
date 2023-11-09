import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryItem.module.scss'

interface ICategoryItem {
	item: ICategory
}

const CategoryItem: FC<ICategoryItem> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link to={`/categories/${item.id}`}>{item.name}</Link>
		</li>
	)
}

export default CategoryItem
