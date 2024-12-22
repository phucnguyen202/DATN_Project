import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { AiOutlineHistory, AiOutlineHome, AiOutlineShop } from 'react-icons/ai'
import { BiPackage } from 'react-icons/bi'
import { BsCardChecklist } from 'react-icons/bs'
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const { Text } = Typography
import { remoAuth } from '../../redux/reducers/authReducer'
const SiderDashboardSeller = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium"
      // to={'/dashboard/seller/taikhoan'}
      >Quản lý tài khoản</Link>,
      icon: <BiPackage size={20} />,
      children: [
        { key: '5', label: <Link className=" font-medium" to={'/dashboard/seller/taikhoan'}>Tài khoản nhân viên</Link> },
        { key: '6', label: <Link className=" font-medium" to={'/dashboard/seller/account/supplier'}>Tài khoản nhà cung cấp</Link> },
      ],
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/seller/danhmuc'}>Thêm danh mục</Link>,
      icon: <AiOutlineHistory size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard-nhabanhang'}>Nhập hàng</Link>,
      icon: <BsCardChecklist size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard-nhabanhang'}>Thông tin gian hàng</Link>,
      icon: <AiOutlineShop size={20} />,
    },
    {
      key: '7',
      label: <Link className=" font-medium" to={'/'}>Trang chủ</Link>,
      icon: <AiOutlineHome size={20} />,
    }
  ]

  const handleLogOut = async () => {
    await dispatch(remoAuth());
    localStorage.removeItem('authData');
    navigate('/login');
  };
  return (
    <>
      <Sider
        width={260}
        theme="light"
        className="h-screen">
        <div className="flex justify-center items-center p-2 gap-2">
          <img
            src={'https://www.niraagayurveda.com/assets/imgs/theme/logo.svg'} alt="" />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          theme="light"
          mode="inline"
          items={items}
        />
        <div className="absolute bottom-0 w-full">
          <Menu theme="light" mode="inline">
            <Menu.Item
              key="logout"
              icon={<MdOutlineLogout size={20} />}
              className="font-medium"
              onClick={handleLogOut}
            >
              Đăng xuất
            </Menu.Item>
          </Menu>
        </div>
      </Sider >
    </>
  )
}

export default SiderDashboardSeller