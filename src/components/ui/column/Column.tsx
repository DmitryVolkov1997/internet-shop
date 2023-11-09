import cn from 'classnames'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

interface IColumn
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: number
	children: ReactNode
	isCenter?: boolean
}

const Column: FC<IColumn> = ({
	size,
	children,
	isCenter = true,
	className,
}) => {
	return (
		<div
			style={{
				display: 'grid',
				gridColumn: `span ${size} / span ${size}`,
				alignItems: isCenter ? 'center' : '',
			}}
			className={cn('flex', className)}
		>
			{children}
		</div>
	)
}

export default Column
