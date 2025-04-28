import { Affix, Layout, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { AiOutlineClockCircle, AiOutlinePlusCircle, AiOutlineUser } from 'react-icons/ai'
import { BiListCheck } from 'react-icons/bi'
import { FiPackage } from 'react-icons/fi'
import { RiFileHistoryLine } from 'react-icons/ri'
import { Link, Outlet } from 'react-router-dom'
import HeaderDashboar from '../../components/HeaderDashboar'
import SiderDashboard from '../../components/SiderDashboard'
const { Text } = Typography


const PageNhanVienDashboard = () => {
  const items = [
    {
      key: '6',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/list-products'}>Danh sách sản phẩm</Link>,
      icon: <BiListCheck size={20} />,
    },
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/create-product'}>Tạo sản phẩm</Link>,
      icon: <AiOutlinePlusCircle size={20} />,
    },
    {
      key: '7',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/order'}>Đơn hàng</Link>,
      icon: <AiOutlineClockCircle size={20} />,
    },
    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/history'}>Lịch sử bán hàng</Link>,
      icon: <RiFileHistoryLine size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/create-nhaphang'}>Nhập hàng</Link>,
      icon: <FiPackage size={20} />,
    },
    {
      key: '5',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/history-nhaphang'}>Lịch sử nhập hàng</Link>,
      icon: <FiPackage size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/nhanvien/info-nhanvien'}>Thông tin cá nhân</Link>,
      icon: <AiOutlineUser size={20} />,
    }

  ]
  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          {/* <SiderDashboardNhanVien /> */}
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

export default PageNhanVienDashboard