import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart-slice/cartSlice'
import drawerSlice from './drawer-slice/drawerSlice'
import filterSlice from './filter-slice/filterSlice'
import userSlice from './user-slice/userSlice'

export const rootReducer = combineReducers({
	cart: cartReducer,
	filter: filterSlice,
	user: userSlice,
	drawer: drawerSlice,
})
