import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { AiOutlineClockCircle, AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai'
import { BiListCheck } from 'react-icons/bi'
import { FiPackage } from 'react-icons/fi'
import { MdOutlineLogout } from "react-icons/md"
import { Link } from 'react-router-dom'
const { Text } = Typography

const SiderDashboardNhanVien = () => {
  const items = [
    {
      key: '6',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/list-products'}>Danh sách sản phẩm</Link>,
      icon: <BiListCheck size={20} />,
    },
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/create-product'}>Tạo sản phẩm</Link>,
      icon: <AiOutlinePlusCircle size={20} />,
    },
    {
      key: '7',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/order'}>Đơn hàng</Link>,
      icon: <AiOutlineClockCircle size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/history'}>Lịch sử bán hàng</Link>,
      icon: <AiOutlineClockCircle size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/create-nhaphang'}>Nhập hàng</Link>,
      icon: <FiPackage size={20} />,
    },
    {
      key: '5',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/history-nhaphang'}>Lịch sử nhập hàng</Link>,
      icon: <FiPackage size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/info-nhanvien'}>Thông tin cá nhân</Link>,
      icon: <AiOutlineUser size={20} />,
    }

  ]
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
          defaultSelectedKeys={['6']}
          theme="light"
          items={items}
        />
        <div className="absolute bottom-0 w-full">
          <Menu theme="light" mode="inline">
            <Menu.Item
              key="logout"
              icon={<MdOutlineLogout size={20} />}
              className="font-medium"
            >
              <Link className=" font-medium" to={'/'}>Trang chủ</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider >
    </>
  )
}

export default SiderDashboardNhanVien