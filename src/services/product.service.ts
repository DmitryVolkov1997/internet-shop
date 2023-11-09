import { BASE_URL } from '@/config/api.config'
import { IProduct } from '@/types/product.interface'
import axios from 'axios'

class ProductService {
	private URL = BASE_URL

	async getProducts(limit: number = 5, name: string = '') {
		return await axios.get<IProduct[]>(
			!name
				? `${this.URL}/products?offset=0&limit=${limit}`
				: `${this.URL}/products?title=${name}`
		)
	}

	async getProductById(id: string) {
		return await axios.get<IProduct>(`${this.URL}/products/${id}`)
	}
}

export default new ProductService()
