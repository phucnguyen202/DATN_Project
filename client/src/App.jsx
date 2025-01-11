import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, } from 'react-router-dom'
import Account_NhaCungCap from './components/Admin/Account_NhaCungCap'
import Account_Nhabanhang from './components/Admin/Account_Nhabanhang'
import { Account, AccountUser, Confirm_nhapHang, Create_product_Supplier, CreateDanhMuc, CreateNhapHang, CreateNhapHang_nhanVien, CreateProduct, History_NhapHang, HistoryBanHang, HistoryMuaHang, HistoryXuatHang, InfoCustomer, InfoPersonal, InfoSupplier, ListAccountSupplier, ListProducts, ListProducts_Supplier, Order_KhachHang, Order_Nhanvien, Status_giaoHang, ThongKe } from './components'
import Main from './layout/Main'
import { AboutPage, CartPage, ContactPage, DetailPage, PaymentPage, HomePage, LoginPage, PageAdmin, PageNhanVienDashboard, PageSellerDashboard, SellerPage, SignupPage, PageKhachHangDashboard, RegisterSupplierPage, PageWishlist, SupplierPage, PageSupplierDashboard, PageShipperDashboard, OtpCode } from './pages'
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
          <Route path='/detail/:idproduct/:info' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path="/storepage" element={<SellerPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/registration/registersupplier" element={<RegisterSupplierPage />} />
          <Route path="/supplier" element={<SupplierPage />} />
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
          <Route path="/dashboard/nhanvien/order" element={<Order_Nhanvien />} />
          <Route path="/dashboard/nhanvien/history" element={<HistoryBanHang />} />
          <Route path="/dashboard/nhanvien/create-nhaphang" element={<CreateNhapHang_nhanVien />} />
          <Route path="/dashboard/nhanvien/history-nhaphang" element={<History_NhapHang />} />
        </Route>

        <Route path="/" element={<PageSellerDashboard />}>
          <Route path="/dashboard/seller/taikhoan" element={<Account />} />
          <Route path="/dashboard/seller/danhmuc" element={<CreateDanhMuc />} />
          <Route path="/dashboard/seller/account/supplier" element={<ListAccountSupplier />} />
          <Route path="/dashboard/seller/nhaphang" element={<CreateNhapHang />} />
          <Route path="/dashboard/seller/history" element={<HistoryBanHang />} />
          <Route path="/dashboard/seller/thongke" element={<ThongKe />} />
          <Route path="/dashboard/seller/history-nhaphang" element={<History_NhapHang />} />
        </Route>

        <Route path="/" element={<PageSupplierDashboard />}>
          <Route path="/dashboard/supplier/confirm-nhaphang" element={<Confirm_nhapHang />} />
          <Route path="/dashboard/supplier/history" element={<HistoryXuatHang />} />
          <Route path="/dashboard/supplier/info" element={<InfoSupplier />} />
          <Route path="/dashboard/supplier/create-product" element={<Create_product_Supplier />} />
          <Route path="/dashboard/supplier/list-product" element={<ListProducts_Supplier />} />
        </Route>

        <Route path="/" element={<PageShipperDashboard />}>
          <Route path="/dashboard/shipper/order" element={<Status_giaoHang />} />
          {/* <Route path="/dashboard/supplier/history" element={<HistoryXuatHang />} /> */}
        </Route>

        <Route path='/' element={<PageKhachHangDashboard />}>
          <Route path="/dashboard/customer/order" element={<Order_KhachHang />} />
          <Route path="/dashboard/customer/info-khachhang" element={<InfoCustomer />} />
          <Route path="/dashboard/customer/history" element={<HistoryMuaHang />} />
        </Route>

        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp-code" element={<OtpCode />} />
      </Routes>
    </>
  )
}

export default App
