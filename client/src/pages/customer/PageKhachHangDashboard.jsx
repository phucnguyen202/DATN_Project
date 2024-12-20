import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderDashboardCustomer, SiderDashboardCustomer } from '../../components'

const PageKhachHangDashboard = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardCustomer />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardCustomer />
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