import { BASE_URL } from '@/config/api.config'
import { ICategory } from '@/types/category.interface'
import axios from 'axios'

class CategoryService {
	private URL = BASE_URL

	async getCategories(limit: number) {
		return await axios.get<ICategory[]>(
			`${this.URL}/categories?offset=0&limit=${limit}`
		)
	}
}

export default new CategoryService()
