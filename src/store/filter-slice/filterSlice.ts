import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterSlice = {
	productName: string
	priceFrom: string
	priceTo: string
}

const initialState: FilterSlice = {
	productName: '',
	priceFrom: '',
	priceTo: '',
}

export const filterSlice = createSlice({
	name: '@filter',
	initialState,
	reducers: {
		setProductName(state, action: PayloadAction<string>) {
			state.productName = action.payload
		},
		setPriceFrom(state, action: PayloadAction<string>) {
			state.priceFrom = action.payload
		},
		setPriceTo(state, action: PayloadAction<string>) {
			state.priceTo = action.payload
		},
		resetFilters(state) {
			state.productName = ''
			state.priceFrom = ''
			state.priceTo = ''
		},
	},
})

export const { setProductName, setPriceFrom, setPriceTo, resetFilters } =
	filterSlice.actions
export default filterSlice.reducer
