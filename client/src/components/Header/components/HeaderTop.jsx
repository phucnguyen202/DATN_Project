import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { remoAuth } from '../../../redux/reducers/authReducer';
const HeaderTop = () => {
  const user = useSelector(state => state?.auth?.currentData)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dashboardRoutes = {
    khachhang: '/dashboard-khachhang',
    banhang: '/dashboard-nhabanhang',
    admin: '/admin/all-account',
    nhacungcap: '/dashboard-nhacungcap',
  };
  const handleLogOut = async () => {
    await dispatch(remoAuth());
    localStorage.removeItem('authData');
    navigate('/login');
  };
  return (
    <>
      <div className='border-b-[1px] px-2 hidden md:block' >
        <div className='grid grid-cols-12'>
          <div className='col-span-6'>
            <div className="flex justify-start space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                Về chúng tôi
              </Link>
              <span className='text-sm'>|</span>
              <Link to={dashboardRoutes[user?.quyen] || '/dashboard-nhacungcap'} className="hover:text-customText text-[13px]">
                Tài khoản
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/wishlist" className="hover:text-customText text-[13px]">
                Yêu thích
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/registration/registersupplier" className="hover:text-customText text-[13px]">
                Đăng ký nhà cung cấp
              </Link>
            </div>
          </div>
          <div className='col-span-6'>
            <div className="flex justify-end space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                Cần giúp đỡ? Gọi: <span className='text-greenCustom font-semibold'>0365228025</span>
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/account" className="hover:text-customText text-[13px]">
                English
              </Link>
              {
                user?.token ? (
                  <>
                    <span className='text-sm'>|</span>
                    <Link to="/"
                      onClick={handleLogOut}
                      className="hover:text-customText text-[13px]">
                      Đăng xuất
                    </Link>
                  </>
                )
                  : (
                    <>
                      <span className='text-sm'>|</span>
                      <Link to="/login" className="hover:text-customText text-[13px]">
                        Đăng nhập
                      </Link>
                      <span className='text-sm'>|</span>
                      <Link to="/signup" className="hover:text-customText text-[13px]">
                        Đăng ký
                      </Link>
                    </>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop