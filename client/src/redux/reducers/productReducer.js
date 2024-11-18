
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // addCategory: (state, action) => {
    //   state.category = action.payload
    // },
  }
})

export const productReducer = productSlice.reducer
export const { addCategory } = productSlice.actions