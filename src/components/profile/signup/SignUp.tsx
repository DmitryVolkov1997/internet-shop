import Spinner from '@/components/ui/spinner/Spinner'
import { BASE_URL } from '@/config/api.config'
import { useAppDispatch } from '@/hooks/redux-hooks'
import { createUser } from '@/store/user-slice/userSlice'
import { Inputs } from '@/types/inputs.interfaces'
import { IUser } from '@/types/user.interface'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../Profile.module.scss'
import FormSection from '../form-section/FormSection'
import { inputData } from './input.data'
import { useYupValidationResolver, validationSchema } from './yap-validation'

interface ISignUp {
	toggleForm: () => void
	toggleDrawer: () => void
}

const SignUp: FC<ISignUp> = ({ toggleForm, toggleDrawer }) => {
	const dispatch = useAppDispatch()
	const mutation = useMutation({
		mutationKey: ['signUp'],
		mutationFn: async (user: IUser) => {
			return await axios.post(`${BASE_URL}/users`, user)
		},
		onSuccess(data) {
			dispatch(createUser({ user: data.data }))
			toggleForm()
			toggleDrawer()
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
			name: data.name,
			avatar: data.avatar,
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
					<h1 className='title text-center'>Register</h1>
					<button type='button' onClick={toggleDrawer}>
						<AiOutlineClose size={25} />
					</button>
				</div>

				<FormSection formData={inputData} register={register} errors={errors} />

				<button
					className='text-center w-full text-dark-gray hover:text-white transition-colors'
					onClick={toggleForm}
					type='button'
				>
					I already have an account
				</button>

				<button
					className='button w-full mt-4 flex items-center gap-x-4 justify-center'
					type='submit'
				>
					Create an account
					{mutation.status === 'pending' && <Spinner className='w-5 h-5' />}
				</button>
			</div>
		</form>
	)
}

export default SignUp
