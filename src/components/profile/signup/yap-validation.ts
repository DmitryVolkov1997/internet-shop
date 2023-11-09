import { useCallback } from 'react'
import * as yup from 'yup'

type FormData = {
	name: string
	email: string
	avatar: string
	password: string
}

export type ValidationSchema = yup.AnyObjectSchema

export const useYupValidationResolver = (validationSchema: ValidationSchema) =>
	useCallback(
		async (data: FormData) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				})

				return {
					values,
					errors: {},
				}
			} catch (errors: yup.ValidationError | unknown) {
				return {
					values: {},
					errors: (errors as yup.ValidationError).inner.reduce(
						(
							allErrors: Record<string, unknown>,
							currentError: yup.ValidationError
						) => ({
							...allErrors,
							[String(currentError.path)]: {
								// Преобразовываем currentError.path в строку
								type: currentError.type ?? 'validation',
								message: currentError.message,
							},
						}),
						{}
					),
				}
			}
		},
		[validationSchema]
	)

export const validationSchema: ValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Неверный формат адреса электронной почты')
		.required('Минимум 2 символа'),
	name: yup
		.string()
		.required('Обязательное поле')
		.min(2, 'Имя должно содержать не менее 2 символов'),
	password: yup
		.string()
		.required('Пароль обязателен')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	avatar: yup
		.string()
		.required(
			'Ссылка на avatar должна быть в таком формате https://place-hold.it/300'
		),
})
