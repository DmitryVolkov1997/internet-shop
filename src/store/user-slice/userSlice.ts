import { IUser } from '@/types/user.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserSlice = {
	currentUser: IUser | null
}

const initialState: UserSlice = {
	currentUser: null,
}

export const userSlice = createSlice({
	name: '@user',
	initialState,
	reducers: {
		createUser: (state, action: PayloadAction<{ user: IUser }>) => {
			state.currentUser = action.payload.user
		},
	},
})

export const { createUser } = userSlice.actions
export default userSlice.reducer
