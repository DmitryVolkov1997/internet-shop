import { useAppDispatch } from '@/hooks/redux-hooks'
import {
	resetFilters,
	setPriceFrom,
	setPriceTo,
	setProductName,
} from '@/store/filter-slice/filterSlice'
import { RootState } from '@/store/store'
import { FC, FormEvent, useRef } from 'react'
import { AiOutlineClear } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Input from '../ui/input/Input'
import styles from './ProductsFilter.module.scss'

interface IProductsFilter {}

const ProductsFilter: FC<IProductsFilter> = ({}) => {
	const dispatch = useAppDispatch()
	const formRef = useRef<HTMLFormElement>(null)
	const { productName, priceFrom, priceTo } = useSelector(
		(state: RootState) => state.filter
	)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { productName, priceFrom, priceTo } = e.target as HTMLFormElement

		dispatch(setProductName(productName.value.trim()))
		dispatch(setPriceFrom(priceFrom.value))
		dispatch(setPriceTo(priceTo.value))
	}

	const handleResetFormAndFilters = () => {
		dispatch(resetFilters())

		if (formRef.current) {
			formRef.current.reset()
		}
	}

	return (
		<form ref={formRef} className={styles.filter} onSubmit={handleSubmit}>
			<Input
				defaultValue={productName}
				name='productName'
				placeholder='Product name'
			/>

			<Input
				defaultValue={priceFrom}
				name='priceFrom'
				placeholder='Price from'
				type='number'
			/>

			<Input
				defaultValue={priceTo}
				name='priceTo'
				placeholder='to'
				type='number'
			/>

			<button className='button' type='submit'>
				search
			</button>

			<button
				type='button'
				className='button flex items-center gap-x-2'
				onClick={handleResetFormAndFilters}
			>
				<AiOutlineClear />
				<span>reset</span>
			</button>
		</form>
	)
}

export default ProductsFilter
