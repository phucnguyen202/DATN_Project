import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: 0
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateCartCount: (state, action) => {
      state.cartCount = action.payload;
    }
  }
})

export const productReducer = productSlice.reducer
export const { updateCartCount } = productSlice.actions