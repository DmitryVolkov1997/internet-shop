import productService from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export const useProduct = (productId: string = '') => {
	return useQuery({
		queryKey: ['productId', productId],
		queryFn: () => productService.getProductById(productId),
		select(data) {
			return data.data
		},
		enabled: !!productId,
	})
}
