import productService from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (limit: number = 0, name: string = '') => {
	return useQuery({
		queryKey: ['products', limit, name],
		queryFn: () => {
			return productService.getProducts(limit, name)
		},
		select(data) {
			return data.data
		},
	})
}
