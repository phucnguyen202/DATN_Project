import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { AiOutlineHistory, AiOutlineShop, AiOutlineUser } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { MdOutlineLogout } from "react-icons/md"
import { Link } from 'react-router-dom'
const { Text } = Typography
const SiderDashboardSupplier = () => {

  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/supplier/confirm-nhaphang'}>Xác nhận nhập hàng</Link>,
      icon: <AiOutlineHistory size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/supplier/confirm-nhaphang'}>Đăng thông tin sản phẩm</Link>,
      icon: <AiOutlineHistory size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/supplier/confirm-nhaphang'}>Dề xuất danh mục</Link>,
      icon: <BsCardChecklist size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/supplier/history'}>Lịch sử xuất hàng</Link>,
      icon: <AiOutlineShop size={20} />,
    },
    {
      key: '5',
      label: <Link className=" font-medium" to={'/'}>Thôn tin cá nhân</Link>,
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
            >
              <Link className=" font-medium" to={'/'}>Trang chủ</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider >
    </>
  )
}

export default SiderDashboardSupplier