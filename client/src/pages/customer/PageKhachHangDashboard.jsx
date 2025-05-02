import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HeaderDashboar from '../../components/HeaderDashboar'
import SiderDashboard from '../../components/SiderDashboard'
import { AiOutlineUser } from 'react-icons/ai'
import { RiBuildingLine } from 'react-icons/ri'
import { MdUpdate } from 'react-icons/md'

const PageKhachHangDashboard = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/customer/order'}>Đơn hàng</Link>,
      icon: <AiOutlineUser size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/customer/history'}>Lịch sử mua hàng</Link>,
      icon: <RiBuildingLine size={20} />,
    },
    // {
    //   key: '3',
    //   label: <Link className=" font-medium" to={'/dashboard/customer/info-khachhang'}>/dashboard/customer/info-khachhang</Link>,
    //   icon: <BiStore size={20} />,
    // },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/customer/info-khachhang'}>Thông tin cá nhân</Link>,
      icon: <MdUpdate size={20} />,
    }
  ]
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboard items={items} />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboar />
          </Affix>
          <Content className="m-4 bg-white p-4 rounded-lg shadow-md">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default PageKhachHangDashboard