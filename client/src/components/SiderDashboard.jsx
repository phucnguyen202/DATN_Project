import { Menu, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import { MdOutlineLogout } from "react-icons/md"
import { Link } from 'react-router-dom'
const { Text } = Typography

const SiderDashboard = ({ items }) => {
  return (
    <>
      <Sider
        width={260}
        theme="light"
        className="h-screen">
        <div className="flex justify-center items-center p-5">
          <img
            src={'https://viet-green.vn/wp-content/uploads/2019/03/shop_logo_v1_2.png'} alt="" />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
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

export default SiderDashboard