import { EnumSize } from '@/types/sizes.interface'
import cn from 'classnames'
import { FC, useState } from 'react'
import styles from './ProductVariations.module.scss'

interface IProductVariations {}

const sizes = [4, 4.5, 5]

const ProductVariations: FC<IProductVariations> = ({}) => {
	const [selectedSize, setSelectedSize] = useState<EnumSize>(EnumSize.Size4)

	return (
		<div className={styles.variations}>
			<div className={styles.text}>Sizes:</div>

			{sizes.map((size, idx) => {
				return (
					<button
						className={cn(styles.btn, {
							[styles.active]: selectedSize === size,
						})}
						key={idx}
						onClick={() => setSelectedSize(size)}
					>
						{size}
					</button>
				)
			})}
		</div>
	)
}

export default ProductVariations
