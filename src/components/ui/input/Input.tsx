import cn from 'classnames'
import { FC } from 'react'
import styles from './Input.module.scss'

interface IInput {
	placeholder: string
	type?: 'number' | 'text' | 'email' | 'password'
	name: string
	defaultValue?: string
}

const Input: FC<IInput> = ({
	placeholder,
	type = 'text',
	name,
	defaultValue,
}) => {
	return (
		<label className={styles.label}>
			<input
				className={cn(styles.input, {
					[styles.text]: type === 'text',
					[styles.number]: type === 'number',
				})}
				type={type === 'number' ? 'number' : 'text'}
				placeholder={placeholder}
				name={name}
				defaultValue={defaultValue}
			/>
		</label>
	)
}

export default Input
