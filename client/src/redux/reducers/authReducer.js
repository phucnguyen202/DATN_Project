
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
    updateUser(state, action) {
      if (state.currentData?.user) {
        updateUserLocalStorage(action.payload)
      }
    },
    remoAuth: (state) => {
      state.data = initialState.data
      syncLocal({});
    },
  }
})

export const authReducer = authSlice.reducer
export const { addAuth, remoAuth, updateUser } = authSlice.actions


export const updateUserLocalStorage = (data) => {
  let authData = JSON.parse(localStorage.getItem('authData'));
  if (authData && authData.user) {
    authData.user = {
      ...authData.user,
      ten: data.ten,
      soDT: data.soDT,
      hinhAnh: data.hinhAnh,
      email: data.email,
      idNguoiDung: data.idNguoiDung,
      quyen: data.quyen,
    }
    // Lưu lại authData vào localStorage
    localStorage.setItem('authData', JSON.stringify(authData));
  }
}


export const syncLocal = (data) => {
  localStorage.setItem('authData', JSON.stringify(data))
}