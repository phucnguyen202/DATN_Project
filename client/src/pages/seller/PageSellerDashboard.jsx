import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import HeaderDashboar from '../../components/HeaderDashboar'
import SiderDashboard from '../../components/SiderDashboard'

const PageSellerDashboard = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/seller/thongke'}>Thống kế</Link>,
      icon: <AiOutlineHistory size={20} />,
    },

    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/seller/danhmuc'}>Quản lý danh mục</Link>,
      icon: <AiOutlineFileProtect size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/seller/nhaphang'}>Nhập hàng</Link>,
      icon: <BsCardChecklist size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/seller/history'}>Lịch sử bán hàng</Link>,
      icon: <BiCoinStack size={20} />,
    },
    {
      key: '8',
      label: <Link className=" font-medium" to={'/dashboard/seller/history-nhaphang'}>Lịch sử nhập hàng</Link>,
      icon: <BiSolidTruck size={20} />,
    },
    {
      key: '7',
      label: <Link to={'/dashboard/seller/taikhoan'} className=" font-medium">Quản lý tài khoản</Link>,
      icon: <BiPackage size={20} />,
    },
    {
      key: '5',
      label: <Link to={'/dashboard/seller/account/supplier'} className=" font-medium">Nhà cung cấp</Link>,
      icon: <AiOutlineIdcard size={20} />,
    },
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

export default PageSellerDashboard