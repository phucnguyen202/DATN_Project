import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboardSeller from '../../components/seller/HeaderDashboardSeller'
import SiderDashboardSeller from '../../components/seller/SiderDashboardSeller'

const PageSellerDashboard = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardSeller />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardSeller />
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