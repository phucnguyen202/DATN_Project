import { Affix, Layout } from "antd"
import SiderComponent from "../../components/Admin/SiderComponent"
import HeaderComponent from "../../components/Admin/HeaderComponent"
import { Outlet } from "react-router-dom"
import { Content } from "antd/es/layout/layout"

const PageAdmin = () => {
  return (
    <>
      {/* <Layout>
        <Affix offsetTop={0}>
          <SiderComponent />
        </Affix>
        <Layout>
          <Affix offsetTop={0}>
            <HeaderComponent />
          </Affix>
          <Content className="m-4 bg-white">
            <Outlet />
          </Content>
        </Layout>
      </Layout> */}
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content className="m-4 bg-white">

            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default PageAdmin