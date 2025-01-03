import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDashboardSupplier from '../../components/Supplier/HeaderDashboardSupplier'
import SiderDashboardSupplier from '../../components/Supplier/SiderDashboardSupplier'

const PageSupplierDashboard = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardSupplier />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardSupplier />
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