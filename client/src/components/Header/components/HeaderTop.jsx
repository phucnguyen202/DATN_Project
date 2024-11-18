import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const HeaderTop = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)

  const dashboardRoutes = {
    khachhang: '/dashboard-khachhang',
    banhang: '/dashboard-nhabanhang',
    admin: '/admin/all-account',
    nhacungcap: '/dashboard-nhacungcap',
  };
  return (
    <>
      <div className='border-b-[1px] px-2 hidden md:block' >
        <div className='grid grid-cols-12'>
          <div className='col-span-6'>
            <div className="flex justify-start space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                About Us
              </Link>
              <span className='text-sm'>|</span>
              <Link to={dashboardRoutes[user?.quyen] || '/dashboard-nhacungcap'} className="hover:text-customText text-[13px]">
                My Account
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/wishlist" className="hover:text-customText text-[13px]">
                Wishlist
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/order-tracking" className="hover:text-customText text-[13px]">
                Order Tracking
              </Link>
            </div>
          </div>
          <div className='col-span-6'>
            <div className="flex justify-end space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                Need help? Call: <span className='text-greenCustom font-semibold'>0365228025</span>
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/account" className="hover:text-customText text-[13px]">
                English
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/login" className="hover:text-customText text-[13px]">
                Đăng nhập
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/signup" className="hover:text-customText text-[13px]">
                Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop