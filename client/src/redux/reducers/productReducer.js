import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartCount: 0,
  wishListCount: 0,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    updateWishListCount: (state, action) => {
      state.wishListCount = action.payload;
    }
  }
})

export const productReducer = productSlice.reducer
export const { updateCartCount, updateWishListCount } = productSlice.actions