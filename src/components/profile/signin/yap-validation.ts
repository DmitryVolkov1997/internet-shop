import { useCallback } from 'react'
import * as yup from 'yup'

type FormData = {
	email: string
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
	password: yup
		.string()
		.required('Пароль обязателен')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
})
