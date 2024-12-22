import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, } from 'react-router-dom'
import Account_NhaCungCap from './components/Admin/Account_NhaCungCap'
import Account_Nhabanhang from './components/Admin/Account_Nhabanhang'
import { Account, AccountUser, CreateDanhMuc, CreateProduct, InfoCustomer, InfoPersonal, ListAccountSupplier, ListProducts, Order_KhachHang } from './components'
import Main from './layout/Main'
import { AboutPage, CartPage, ContactPage, DetailPage, PaymentPage, HomePage, LoginPage, PageAdmin, PageNhanVienDashboard, PageSellerDashboard, SellerPage, SignupPage, PageKhachHangDashboard, SupplierPage, PageWishlist } from './pages'
import { addAuth } from './redux/reducers/authReducer'

function App() {
  const user = useSelector(state => state?.auth?.currentData?.user)
  const dispatch = useDispatch()
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    const res = localStorage.getItem('authData');
    res && dispatch(addAuth(JSON.parse(res)));
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<HomePage />} />
          <Route path='/detail/:idproduct' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/storepage" element={<SellerPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/registration/supplier" element={<SupplierPage />} />
          <Route path="/wishlist" element={<PageWishlist />} />

        </Route>

        <Route path="/" element={<PageAdmin />}>
          <Route path="/admin/all-account" element={<AccountUser />} />
          <Route path="/admin/account-nhacungcap" element={<Account_NhaCungCap />} />
          <Route path="/admin/danhmuc" element={<CreateDanhMuc />} />
          <Route path="/admin/account-nhabanhang" element={<Account_Nhabanhang />} />
        </Route>

        <Route path="/" element={<PageNhanVienDashboard />}>
          <Route path="/dashboard/nhanvien/list-products" element={<ListProducts />} />
          <Route path="/dashboard/nhanvien/create-product" element={<CreateProduct />} />
          <Route path="/dashboard/nhanvien/info-nhanvien" element={<InfoPersonal />} />
        </Route>

        <Route path="/" element={<PageSellerDashboard />}>
          <Route path="/dashboard/seller/taikhoan" element={<Account />} />
          <Route path="/dashboard/seller/danhmuc" element={<CreateDanhMuc />} />
          <Route path="/dashboard/seller/account/supplier" element={<ListAccountSupplier />} />
        </Route>
        <Route path='/' element={<PageKhachHangDashboard />}>
          <Route path="/dashboard/customer/order" element={<Order_KhachHang />} />
          <Route path="/dashboard/customer/info-khachhang" element={<InfoCustomer />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
