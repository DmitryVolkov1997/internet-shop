import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

interface IRow
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}

const Row: FC<IRow> = ({ children, className }) => {
	return (
		<div className={cn('grid grid-cols-12 max-w-7xl w-full', className)}>
			{children}
		</div>
	)
}

export default Row
