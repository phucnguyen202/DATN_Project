import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, } from 'react-router-dom'
import Account_NhaCungCap from './components/Admin/Account_NhaCungCap'
import Account_Nhabanhang from './components/Admin/Account_Nhabanhang'
import { Account, AccountUser, Confirm_nhapHang, Create_product_Supplier, CreateDanhMuc, CreateNhapHang, CreateNhapHang_nhanVien, CreateProduct, DealsOfTheDay, History_NhapHang, HistoryBanHang, HistoryMuaHang, HistoryXuatHang, InfoCustomer, InfoPersonal, InfoSupplier, ListAccountSupplier, ListProducts, ListProducts_Supplier, Order_KhachHang, Order_Nhanvien, Status_giaoHang, Suggested_List, ThongKe } from './components'
import Main from './layout/Main'
import { AboutPage, CartPage, ContactPage, DetailPage, PaymentPage, HomePage, LoginPage, PageAdmin, PageNhanVienDashboard, PageSellerDashboard, SellerPage, SignupPage, PageKhachHangDashboard, RegisterSupplierPage, PageWishlist, SupplierPage, PageSupplierDashboard, PageShipperDashboard, OtpCode } from './pages'
import { addAuth } from './redux/reducers/authReducer'

import { ConfigProvider, Spin } from 'antd';
function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const user = useSelector(state => state?.auth?.currentData?.user)
  useEffect(() => {
    getData();
    setLoading(false);
  }, [])

  const getData = () => {
    const res = localStorage.getItem('authData');
    res && dispatch(addAuth(JSON.parse(res)));
  }

  if (loading) {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <Spin size="large" />
            <h2 className="mt-4 text-xl font-semibold text-gray-700 animate-pulse">
              Đang tải...
            </h2>
          </div>
        </div>
      </ConfigProvider>
    );
  }

  const routeGroups = [
    {
      layout: Main,
      routes: [
        { path: '/', element: <HomePage /> },
        { path: '/detail/:idproduct/:info', element: <DetailPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/storepage', element: <SellerPage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/payment', element: <PaymentPage /> },
        { path: '/registration/registersupplier', element: <RegisterSupplierPage /> },
        { path: '/supplier', element: <SupplierPage /> },
        { path: '/wishlist', element: <PageWishlist /> },
      ]
    },
    {
      layout: PageAdmin,
      routes: [
        { path: '/admin/all-account', element: <AccountUser /> },
        { path: '/admin/account-nhacungcap', element: <Account_NhaCungCap /> },
        { path: '/admin/danhmuc', element: <CreateDanhMuc /> },
        { path: '/admin/account-nhabanhang', element: <Account_Nhabanhang /> },
      ]
    },
    {
      layout: PageNhanVienDashboard,
      routes: [
        { path: '/dashboard/nhanvien/list-products', element: <ListProducts /> },
        { path: '/dashboard/nhanvien/create-product', element: <CreateProduct /> },
        { path: '/dashboard/nhanvien/info-nhanvien', element: <InfoPersonal /> },
        { path: '/dashboard/nhanvien/order', element: <Order_Nhanvien /> },
        { path: '/dashboard/nhanvien/history', element: <HistoryBanHang /> },
        { path: '/dashboard/nhanvien/create-nhaphang', element: <CreateNhapHang_nhanVien /> },
        { path: '/dashboard/nhanvien/history-nhaphang', element: <History_NhapHang /> },
        { path: '/dashboard/nhanvien/deals-of-the-day', element: <DealsOfTheDay /> },
      ]
    },
    {
      layout: PageSellerDashboard,
      routes: [
        { path: '/dashboard/seller/taikhoan', element: <Account /> },
        { path: '/dashboard/seller/danhmuc', element: <CreateDanhMuc /> },
        { path: '/dashboard/seller/account/supplier', element: <ListAccountSupplier /> },
        { path: '/dashboard/seller/nhaphang', element: <CreateNhapHang /> },
        { path: '/dashboard/seller/history', element: <HistoryBanHang /> },
        { path: '/dashboard/seller/thongke', element: <ThongKe /> },
        { path: '/dashboard/seller/history-nhaphang', element: <History_NhapHang /> },
      ]
    },
    {
      layout: PageSupplierDashboard,
      routes: [
        { path: '/dashboard/supplier/confirm-nhaphang', element: <Confirm_nhapHang /> },
        { path: '/dashboard/supplier/history', element: <HistoryXuatHang /> },
        { path: '/dashboard/supplier/info', element: <InfoSupplier /> },
        { path: '/dashboard/supplier/create-product', element: <Create_product_Supplier /> },
        { path: '/dashboard/supplier/list-product', element: <ListProducts_Supplier /> },
        { path: '/dashboard/supplier/suggested-list', element: <Suggested_List /> },
      ]
    },
    {
      layout: PageShipperDashboard,
      routes: [
        { path: '/dashboard/shipper/order', element: <Status_giaoHang /> },
      ]
    },
    {
      layout: PageKhachHangDashboard,
      routes: [
        { path: '/dashboard/customer/order', element: <Order_KhachHang /> },
        { path: '/dashboard/customer/info-khachhang', element: <InfoCustomer /> },
        { path: '/dashboard/customer/history', element: <HistoryMuaHang /> },
      ]
    }
  ]
  return (
    <>
      <Routes>
        {routeGroups.map((group, index) => (
          <Route key={index} path="/" element={<group.layout />}>
            {group.routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        ))}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp-code" element={<OtpCode />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
