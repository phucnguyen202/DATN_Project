import { Menu, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { BiCoinStack, BiPackage, BiSolidTruck } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
const { Text } = Typography;
const SiderDashboardSeller = () => {

  const items = [
    {
      key: '1',
      label: <Link className=" font-medium" to={'/dashboard/seller/thongke'}>Thống kế</Link>,
      icon: <AiOutlineHistory size={20} />,
    },

    {
      key: '2',
      label: <Link className=" font-medium" to={'/dashboard/seller/danhmuc'}>Quản lý danh mục</Link>,
      icon: <AiOutlineHistory size={20} />,
    },
    {
      key: '3',
      label: <Link className=" font-medium" to={'/dashboard/seller/nhaphang'}>Nhập hàng</Link>,
      icon: <BsCardChecklist size={20} />,
    },
    {
      key: '4',
      label: <Link className=" font-medium" to={'/dashboard/seller/history'}>Lịch sử bán hàng</Link>,
      icon: <BiCoinStack size={20} />,
    },
    {
      key: '8',
      label: <Link className=" font-medium" to={'/dashboard/seller/history-nhaphang'}>Lịch sử nhập hàng</Link>,
      icon: <BiSolidTruck size={20} />,
    },
    {
      key: '7',
      label: <Link to={'/dashboard/seller/taikhoan'} className=" font-medium">Quản lý tài khoản</Link>,
      icon: <BiPackage size={20} />,
    },
    {
      key: '5',
      label: <Link to={'/dashboard/seller/account/supplier'} className=" font-medium">Nhà cung cấp</Link>,
      icon: <BiPackage size={20} />,
    },
  ]
  return (
    <>
      <Sider
        width={260}
        theme="light"
        className="h-screen">
        <div className="flex justify-center items-center p-2 gap-2">
          <img
            src={'https://www.niraagayurveda.com/assets/imgs/theme/logo.svg'} alt="" />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          theme="light"
          mode="inline"
          items={items}
        />
        <div className="absolute bottom-0 w-full">
          <Menu theme="light" mode="inline">
            <Menu.Item
              key="logout"
              icon={<MdOutlineLogout size={20} />}
              className="font-medium"
            >
              <Link className=" font-medium" to={'/'}>Trang chủ</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider >
    </>
  )
}

export default SiderDashboardSeller