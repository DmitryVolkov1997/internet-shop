import { IUser } from '@/types/user.interface'
import { Dispatch, SetStateAction } from 'react'

export const signupValidateForm = (
	user: IUser,
	setErrors: Dispatch<SetStateAction<IUser | null>>
) => {
	const { avatar, email, name, password } = user
	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

	const newErrors = {
		avatar: '',
		email: '',
		password: '',
		name: '',
	}

	if (!name) {
		newErrors.name = 'Имя пользователя обязательно'
	}

	if (!email) {
		newErrors.email = 'Email обязателен'
	} else if (!EMAIL_REGEXP.test(email)) {
		newErrors.email = 'Неверный формат email'
	}

	if (!password) {
		newErrors.password = 'Пароль обязателен'
	} else if (password.length < 6) {
		newErrors.password = 'Пароль должен содержать не менее 6 символов'
	}

	if (!avatar && !avatar.startsWith('http')) {
		newErrors.avatar = 'Обязательное поле (example: http://my-avatar.com)'
	}

	setErrors(newErrors)

	const isValid = Object.values(newErrors).every(error => error === '')

	return isValid
}
