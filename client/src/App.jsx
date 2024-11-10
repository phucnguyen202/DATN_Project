import { Route, Routes, } from 'react-router-dom'
import { CartPage, DetailPage, HomePage, LoginPage, SellerPage, SignupPage } from './pages'
import Main from './layout/Main'
import PageAdmin from './pages/admin/PageAdmin'
import AccountUser from './components/Admin/AccountUser'
import Account_NhaCungCap from './components/Admin/Account_NhaCungCap'
import Account_Nhabanhang from './components/Admin/Account_Nhabanhang'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addAuth } from './redux/reducers/authReducer'

function App() {
  // const user = useSelector(state => state?.auth?.currentData?.user)
  const dispatch = useDispatch()

  useEffect(() => {
    getData();
  }, [])
  const getData = async () => {
    const res = localStorage.getItem('authData');
    res && dispatch(addAuth(JSON.parse(res)));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<HomePage />} />
          <Route path='/detail/:id_product' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/storepage/:infostore" element={<SellerPage />} />
        </Route>

        <Route path="/" element={<PageAdmin />}>
          <Route path="/all-account" element={<AccountUser />} />
          <Route path="/account-nhacungcap" element={<Account_NhaCungCap />} />
          <Route path="/danhmuc" element={<AccountUser />} />
          <Route path="/account-nhabanhang" element={<Account_Nhabanhang />} />
        </Route>
        <Route path="/dashboard-khachhang" element={<AccountUser />} />



        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
