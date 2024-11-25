import { Affix, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SiderDashboardNhanVien from '../../components/nhanVien/SiderDashboardNhanVien'
import HeaderDashboardNhanVien from '../../components/nhanVien/HeaderDashboardNhanVien'

const PageNhanVienDashboard = () => {
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardNhanVien />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardNhanVien />
          </Affix>
          <Content className="m-4 bg-white p-4 rounded-lg shadow-md">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default PageNhanVienDashboard