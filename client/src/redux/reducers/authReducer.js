
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentData: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuth: (state, action) => {
      state.currentData = action.payload
      syncLocal(action.payload)
    },
    remoAuth: (state) => {
      state.data = initialState.data
      syncLocal({});
    },
  }
})

export const authReducer = authSlice.reducer
export const { addAuth, remoAuth } = authSlice.actions

export const syncLocal = (data) => {
  localStorage.setItem('authData', JSON.stringify(data))
}