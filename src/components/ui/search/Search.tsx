import { FC } from 'react'
import Column from '../column/Column'
import styles from './Search.module.scss'

interface ISearch {}

const Search: FC<ISearch> = ({}) => {
	return (
		<Column size={4}>
			<div className={styles.search}>
				<input type='text' placeholder='Search for anything...' />
			</div>
		</Column>
	)
}

export default Search
