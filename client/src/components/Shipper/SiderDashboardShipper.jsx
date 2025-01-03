import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import { MdUpdate } from 'react-icons/md'
import { RiBuildingLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { remoAuth } from '../../redux/reducers/authReducer'
import { MdOutlineLogout } from "react-icons/md";
const { Text } = Typography
const SiderDashboardShipper = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/shipper/order'}>Quản lý giao hàng</Link>,
      icon: <AiOutlineUser size={20} />,
    },
    // {
    //   key: '2',
    //   label: <Link className=" font-medium" to={'/admin/account-nhacungcap'}>Duyệt nhà cung cấp</Link>,
    //   icon: <RiBuildingLine size={20} />,
    // },
    // {
    //   key: '3',
    //   label: <Link className=" font-medium" to={'/admin/account-nhabanhang'}>Duyệt tài khoản bán hàng</Link>,
    //   icon: <BiStore size={20} />,
    // },
    // {
    //   key: '4',
    //   label: <Link className=" font-medium" to={'/admin/danhmuc'}>Cập nhật danh mục</Link>,
    //   icon: <MdUpdate size={20} />,
    // },
    // {
    //   key: '5',
    //   label: <Link className=" font-medium" to={'/'}>Trang chủ</Link>,
    //   icon: <AiOutlineHome size={20} />,
    // }
  ]
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
          theme="light"
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

export default SiderDashboardShipper