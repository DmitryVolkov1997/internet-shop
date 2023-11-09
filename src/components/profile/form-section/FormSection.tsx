import { Inputs } from '@/types/inputs.interfaces'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import InputField from '../input-field/InputField'
import { InputProps } from '../signup/input.data'

interface IFormSection {
	formData: InputProps[]
	register: UseFormRegister<Inputs>
	errors: FieldErrors<Inputs>
}

const FormSection: FC<IFormSection> = ({ formData, errors, register }) => {
	return formData.map(item => (
		<InputField key={item.id} register={register} errors={errors} item={item} />
	))
}

export default FormSection
