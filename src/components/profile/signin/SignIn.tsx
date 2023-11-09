import Spinner from '@/components/ui/spinner/Spinner'
import { BASE_URL } from '@/config/api.config'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { createUser } from '@/store/user-slice/userSlice'
import { Inputs } from '@/types/inputs.interfaces'
import { IUser } from '@/types/user.interface'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../Profile.module.scss'
import FormSection from '../form-section/FormSection'
import { inputData } from './input.data'
import { useYupValidationResolver, validationSchema } from './yap-validation'

interface ISignIn {
	toggleForm: () => void
	toggleDrawer: () => void
}

const SignIn: FC<ISignIn> = ({ toggleForm, toggleDrawer }) => {
	const [error, setError] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const mutation = useMutation({
		mutationKey: ['SignIn'],
		mutationFn: async (user: Pick<IUser, 'email' | 'password'>) => {
			const loginResponse = await axios.post(`${BASE_URL}/auth/login`, user)
			const accessToken = loginResponse.data.access_token

			const profileResponse = await axios.get(`${BASE_URL}/auth/profile`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})

			return {
				access_token: accessToken,
				profile: profileResponse.data,
			}
		},
		onSuccess: data => {
			dispatch(createUser({ user: data.profile }))
			toggleDrawer()
			setError(false)
		},
		onError: () => {
			setError(true)
		},
	})

	const resolver = useYupValidationResolver(validationSchema) as never

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ resolver })
	const onSubmit: SubmitHandler<Inputs> = data =>
		mutation.mutate({
			email: data.email,
			password: data.password,
		})

	const handleKey = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.code === 'Escape') {
			toggleDrawer()
		}
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={handleKey}
		>
			<div className={styles.sign}>
				<div className={styles.row}>
					<h1 className='title text-center'>Login in</h1>
					<button type='button' onClick={toggleDrawer}>
						<AiOutlineClose size={25} />
					</button>
				</div>
				<div className='font-bold text-red-600 mb-2'>
					{error && 'Неверный логин или пароль'}
				</div>

				<FormSection formData={inputData} errors={errors} register={register} />

				<button
					className='text-center w-full text-dark-gray hover:text-white transition-colors'
					onClick={toggleForm}
					type='button'
				>
					Create an account
				</button>

				<button className='button w-full mt-4 flex items-center gap-x-4 justify-center'>
					Login
					{mutation.status === 'pending' && <Spinner className='w-5 h-5' />}
				</button>
			</div>
		</form>
	)
}

export default SignIn
