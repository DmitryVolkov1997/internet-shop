import Column from '@/components/ui/column/Column'
import { IProduct } from '@/types/product.interface'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import styles from './ProductSlider.module.scss'

interface IProductSlider {
	info: IProduct
}

const ProductSlider: FC<IProductSlider> = ({ info }) => {
	const [currentSlideIdx, setCurrentSlideIdx] = useState(0)

	return (
		<Column size={6} isCenter={false}>
			<div className={styles.slider}>
				<div className={styles.left}>
					<motion.img
						className={styles.mainImg}
						src={info.images[currentSlideIdx]}
						alt='product-img'
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1 }}
					/>
				</div>

				<div className={styles.right}>
					{info.images.map((image, idx) => {
						return (
							<motion.button
								key={idx}
								className={cn(styles.img, {
									[styles.active]: idx === currentSlideIdx,
								})}
								onClick={() => setCurrentSlideIdx(idx)}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1 }}
							>
								<img src={image} alt={`slide-${idx}`} />
							</motion.button>
						)
					})}
				</div>
			</div>
		</Column>
	)
}

export default ProductSlider
