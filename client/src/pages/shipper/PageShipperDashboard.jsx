import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SiderDashboardShipper from '../../components/Shipper/SiderDashboardShipper'
import HeaderDashboardShipper from '../../components/Shipper/HeaderDashboardShipper'


const PageShipperDashboard = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardShipper />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardShipper />
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