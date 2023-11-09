import { Inputs } from '@/types/inputs.interfaces'
import cn from 'classnames'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { InputProps } from '../signup/input.data'
import styles from './InputField.module.scss'

interface IInputField {
	register: UseFormRegister<Inputs>
	errors: FieldErrors<Inputs>
	item: InputProps
}

const InputField: FC<IInputField> = ({ errors, register, item }) => {
	const error = errors[item.label]

	return (
		<label className={styles.label}>
			<input
				className={cn(styles.input, {
					[styles.isError]: error,
				})}
				placeholder={item.placeholder}
				{...register(item.label, { required: true })}
			/>
			{error && <span className={styles.error}>{error.message}</span>}
		</label>
	)
}

export default InputField
