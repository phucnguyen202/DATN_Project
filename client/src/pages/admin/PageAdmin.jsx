import { Affix, Layout } from "antd"

import { Outlet } from "react-router-dom"
import { Content } from "antd/es/layout/layout"
import HeaderDashboardAdmin from "../../components/Admin/HeaderDashboardAdmin"
import SiderDashboardAdmin from "../../components/Admin/SiderDashboardAdmin"
import { useState } from "react"

const PageAdmin = () => {

  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <SiderDashboardAdmin />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderDashboardAdmin />
          </Affix>
          <Content className="m-4 bg-white p-4 rounded-lg shadow-md">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default PageAdmin