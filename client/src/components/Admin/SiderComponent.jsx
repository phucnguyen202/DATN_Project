import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const { Text } = Typography
const SiderComponent = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/all-account'}>Quản lý tài khoản</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/account-nhacungcap'}>Duyệt nhà cung cấp</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/account-nhabanhang'}>Duyệt tài khoản bán hàng</Link>,
      icon: <BiHomeAlt size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/danhmuc'}>Cập nhật danh mục</Link>,
      icon: <BiHomeAlt size={20} />,
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
            style={{
              width: 48,
              height: 48
            }}
            src={'https://firebasestorage.googleapis.com/v0/b/inventory-management-app-8e149.appspot.com/o/Logo.png?alt=media&token=ec8168de-8f25-4802-9334-ff1579ebc4b0'} alt="" />
          <Text style={{
            fontSize: '19px',
            fontWeight: 'bold',
            color: '#1570ef'
          }}>KANBAN</Text>
        </div>
        <Menu
          theme="light"
          items={items}
        />
      </Sider >
    </>
  )
}

export default SiderComponent