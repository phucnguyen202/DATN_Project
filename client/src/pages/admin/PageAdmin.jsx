import { Affix, Layout } from "antd"

import { Outlet } from "react-router-dom"
import { Content } from "antd/es/layout/layout"
import HeaderDashboardAdmin from "../../components/Admin/HeaderDashboardAdmin"
import SiderDashboardAdmin from "../../components/Admin/SiderDashboardAdmin"

const PageAdmin = () => {
  return (
    <>
      <Layout>
        {/* <Affix offsetTop={0}> */}
        <SiderDashboardAdmin />
        {/* </Affix> */}
        <Layout>
          <HeaderDashboardAdmin />
          <Content className="m-4 bg-white">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default PageAdmin