import categoryService from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export const useCategories = (limit: number) => {
	return useQuery({
		queryKey: ['categories', limit],
		queryFn: () => categoryService.getCategories(limit),
		select: data => data.data,
	})
}
