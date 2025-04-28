import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboar from '../../components/HeaderDashboar'
import SiderDashboard from '../../components/SiderDashboard'

const PageSupplierDashboard = () => {
  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/supplier/confirm-nhaphang'}>Xác nhận nhập hàng</Link>,
      icon: <AiOutlineHistory size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/supplier/create-product'}>Đăng thông tin sản phẩm</Link>,
      icon: <AiOutlineEdit size={20} />,
    },
    {
      key: '6',
      label: <Link className=" font-medium" to={'/dashboard/supplier/list-product'}>Danh sách sản phẩm</Link>,
      icon: <BsCardChecklist size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/supplier/suggested-list'}>Dề xuất danh mục</Link>,
      icon: <AiOutlineCarryOut size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/supplier/history'}>Lịch sử xuất hàng</Link>,
      icon: <AiOutlineShop size={20} />,
    },
    {
      key: '5',
      label: <Link className=" font-medium" to={'/dashboard/supplier/info'}>Thôn tin cá nhân</Link>,
      icon: <AiOutlineUser size={20} />,
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

export default PageSupplierDashboard