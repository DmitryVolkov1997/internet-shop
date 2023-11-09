import { createSlice } from '@reduxjs/toolkit'

type DrawerType = {
	isShowDrawer: boolean
}

const initialState: DrawerType = {
	isShowDrawer: false,
}

export const drawerSlice = createSlice({
	name: '@drawer',
	initialState,
	reducers: {
		toggleDrawer(state) {
			state.isShowDrawer = !state.isShowDrawer
		},
	},
})

export const { toggleDrawer } = drawerSlice.actions
export default drawerSlice.reducer
