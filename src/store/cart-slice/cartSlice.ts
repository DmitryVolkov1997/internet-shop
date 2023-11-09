import { IProduct } from '@/types/product.interface'
import { QuantityType } from '@/types/quantity.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSlice = {
	orders: IProduct[]
}

const initialState: CartSlice = {
	orders: [],
}

const cartSlice = createSlice({
	name: '@cart',
	initialState,
	reducers: {
		addOrders(state, action: PayloadAction<{ order: IProduct }>) {
			const isOrderInBasket = state.orders.find(
				order => order.id === action.payload.order.id
			)

			if (!isOrderInBasket)
				state.orders.push({ ...action.payload.order, quantity: 1 })
		},
		changeQuantity(
			state,
			action: PayloadAction<{ type: QuantityType; id: number }>
		) {
			state.orders = state.orders.map(order => {
				if (order.id === action.payload.id) {
					let newQuantity = order.quantity || 1

					if (action.payload.type === 'INCREMENT') {
						newQuantity += 1
					} else if (action.payload.type === 'DECREMENT' && newQuantity > 1) {
						newQuantity -= 1
					}

					return {
						...order,
						quantity: newQuantity,
					}
				} else {
					return order
				}
			})
		},
		removeFromBasket(state, action: PayloadAction<{ id: number }>) {
			state.orders = state.orders.filter(
				order => order.id !== action.payload.id
			)
		},
	},
})

export const { addOrders, changeQuantity, removeFromBasket } = cartSlice.actions
export default cartSlice.reducer
