import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboar from '../../components/HeaderDashboar'
import SiderDashboard from '../../components/SiderDashboard'


const PageShipperDashboard = () => {
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

export default PageShipperDashboard