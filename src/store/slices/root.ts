import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "shared/types"

interface RootState {
	isLoggedIn: boolean
	user: User | null
}

// Define the initial state using that type
const initialState: RootState = {
	isLoggedIn: false,
	user: null
}

export const rootSlice = createSlice({
	name: "root",

	initialState,
	reducers: {
		setLoggedIn: (state) => {
			state.isLoggedIn = true
		},

		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		}
	}
})

export const { setLoggedIn, setUser } = rootSlice.actions

export default rootSlice.reducer
