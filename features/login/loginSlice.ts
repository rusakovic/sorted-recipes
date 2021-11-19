import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JWT } from '../../screens/Welcome'

export interface LoginState {
  user: JWT | undefined
}

const initialState: LoginState = {
  user: undefined,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<JWT>) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = initialState.user
    },
  },
})

export const { logoutUser, setUserCredentials } = loginSlice.actions

export default loginSlice.reducer
