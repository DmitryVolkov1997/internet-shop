export interface InputProps {
	id: number
	label: string
	type?: 'text' | 'email' | 'password'
	placeholder?: string
}

export const inputData: InputProps[] = [
	{
		id: 1,
		label: 'email',
		type: 'email',
		placeholder: 'Your email',
	},
	{
		id: 2,
		label: 'name',
		placeholder: 'Your name',
	},
	{
		id: 3,
		label: 'password',
		type: 'password',
		placeholder: 'Your password',
	},
	{
		id: 4,
		label: 'avatar',
		placeholder: 'Your avatar',
	},
]
