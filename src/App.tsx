import HomePage from '@/pages/home-page/HomePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './pages/cart-page/CartPage'
import CategoriesPage from './pages/categories-page/CategoriesPage'
import HelpPage from './pages/help-page/HelpPage'
import ProductDetails from './pages/product-details/ProductDetails'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/categories/:id' element={<CategoriesPage />} />
				<Route path='/help' element={<HelpPage />} />
			</Routes>
		</>
	)
}

export default App
