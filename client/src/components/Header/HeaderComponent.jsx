import { Badge, Dropdown, Input, Menu, Space } from 'antd';
import React, { useState } from 'react';
import { AiOutlineAppstore, AiOutlineDown, AiOutlineEnvironment, AiOutlineLogout, AiOutlineMenu, AiOutlineSetting, AiOutlineTag, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaHotjar, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import DrawerMobile from './components/DrawerMobile';
import HeaderTop from './components/HeaderTop';
const itemsCart = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
];
const itemsAccount = [
  {
    key: '1',
    icon: <AiOutlineUser className='text-[#343a40]' size={16} />,
    label: (
      <Link className='text-[#343a40]' to='/'>
        My Account
      </Link>
    ),
  },
  {
    key: '2',
    icon: <AiOutlineEnvironment className='text-[#343a40]' size={16} />,
    label: (
      <Link to='/'>
        Order Tracking
      </Link>
    ),
  },
  {
    key: '3',
    icon: <AiOutlineTag className='text-[#343a40]' size={16} />,
    label: (
      <Link to='/'>
        My Voucher
      </Link>
    ),
  },
  {
    key: '4',
    icon: <FaRegHeart className='text-[#343a40]' size={16} />,
    label: (
      <Link to='/'>
        My Wishlist
      </Link>
    ),
  },
  {
    key: '5',
    icon: <AiOutlineSetting className='text-[#343a40]' size={16} />,
    label: (
      <Link to='/'>
        Setting
      </Link>
    ),
  },
  {
    key: '6',
    icon: <AiOutlineLogout className='text-[#343a40]' size={16} />,
    label: (
      <Link to='/'>
        Sign out
      </Link>
    ),
  },
];
const itemsCategory = [
  {
    label: <a href="" className='text-gray-custom flex gap-3 items-center'>
      <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
      <span>All Categories</span>
    </a>,
    key: '0',
  },
  {
    label:
      <a href="" className='text-gray-custom flex gap-3 items-center'>
        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
        <span>Milks and Dairies</span>
      </a>,
    key: '1',
  },
  {
    label:
      <a href="" className='text-gray-custom flex gap-3 items-center'>
        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-6.svg" alt="" />
        <span>Wines & Alcohol</span>
      </a>,
    key: '2',
  },
  {
    label:
      <a href="" className='text-gray-custom flex gap-3 items-center'>
        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-2.svg" alt="" />
        <span>Clothing & Beauty</span>
      </a>,
    key: '3',
  },
];
const items = [
  {
    icon: <FaHotjar size={20} style={{
      color: '#3BB77E'
    }} />,
    label: <Link
      style={{
        color: '#253D4E'
      }}
      className='text-base font-medium' to='/'>Khuyến mại</Link>,
    key: 0,
  },
  {
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Trang chủ</Link>,
    key: 1,
  },
  {
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Về chúng tôi</Link>,
    key: 2,
  },
  {
    label: <Link style={{
      color: '#253D4E'
    }}
      className='text-base  font-medium' to='/'>Cửa hàng</Link>,
    key: 3,
    children: [
      {
        label: 'Item 1',
        key: 'as'
      }
    ],
  },
  {
    key: 4,
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Nhà cung cấp</Link>,
  },
  // {
  //   key: 5,
  //   label: <Link style={{
  //     color: '#253D4E'
  //   }} className='text-base  font-medium' to='/' > Thực đơn Mega</Link >,
  // },
  {
    key: 6,
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Blog</Link>,
  },
  {
    key: 7,
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Liên hệ</Link>,
  },
  {
    key: 8,
    label: <Link style={{
      color: '#253D4E'
    }} className='text-base  font-medium' to='/'>Dành cho bạn</Link>,
  },
];

const HeaderComponent = () => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header >
        <div className='md:hidden'>
          <div className='bg-customBg flex justify-center items-center'>
            <p className='text-slate-50 text-sm p-2'>Grand opening, <b>up to 15%</b>  off all items, Only <b>3 days</b> left</p>
          </div>
        </div>
        <HeaderTop />
        <div className='border-b-[1px]'>
          <div className='grid grid-cols-12 px-4 md:py-8 py-3 '>
            <div className='col-span-2 md:hidden flex items-center'>
              <AiOutlineMenu onClick={showDrawer} size={26} />
            </div>
            <div className='col-span-7 md:col-span-3 xl:col-span-2 max-md:justify-center flex items-center'>
              <Link to='/'>
                <img className=' w-[150px] md:w-[180px]' src="https://www.niraagayurveda.com/assets/imgs/theme/logo.svg" alt="" />
              </Link>
            </div>
            <div
              style={{
                borderRadius: '3px',
                border: '2px solid #BCE3C9',
              }}
              className='col-span-7 hidden md:flex justify-center items-center gap-2 '>
              <Dropdown
                className=' w-[30%] xl:w-[20%] cursor-pointer'
                menu={{
                  items: itemsCategory,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='text-sm font-[500] flex justify-center text-customText'>
                    All Categories
                    <AiOutlineDown />
                  </Space>
                </a>
              </Dropdown>

              <span className='w-[1px] h-6 bg-slate-300'></span>
              <Input
                style={{
                  border: 'none',
                }}
                variant="borderless"
                className='py-3 text-customText placeholder-[#a74040]'
                placeholder="Search for items..."
                suffix={<BiSearch className="text-slate-500" size={25} />}
              />
            </div>
            <div className='col-span-3 hidden max-md:flex xl:flex gap-6 justify-end'>
              <div className='flex gap-2 items-center'>
                <Badge color='#3BB77E' count={6} >
                  <FaRegHeart className='text-[#343a40]' size={25} />
                </Badge>
                <span className='text-base text-custom max-md:hidden font-medium'>Wishlist</span>
              </div>
              <Dropdown
                className=' cursor-pointer'
                menu={{
                  items: itemsCart,
                }}
                placement="bottomLeft"
              >
                <div className='flex gap-2 items-center'>
                  <Badge color='#3BB77E' count={6} >
                    <MdOutlineShoppingCart className='text-[#343a40]' size={25} />
                  </Badge>
                  <span className='text-base text-custom font-medium hidden xl:flex'>Cart</span>
                </div>
              </Dropdown>
              <Dropdown
                className=' cursor-pointer max-md:hidden'
                menu={{
                  items: itemsAccount,
                }}
                placement="bottomLeft"
              >
                <div className='flex gap-1 items-center'>
                  <AiOutlineUser className='text-[#343a40]' size={25} />
                  <span className='text-base text-custom font-medium'>Account</span>
                </div>
              </Dropdown>
            </div>
            <div className='col-span-2 xl:hidden'></div>
          </div>
        </div>
        <div className='border-b-[1px] hidden md:block'>
          <div className='grid grid-cols-12 px-4 py-4'>
            <div className='col-span-2 hidden xl:flex items-center'>
              <Dropdown
                menu={{ items: itemsCategory, }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='text-base font-semibold text-slate-50 bg-customBg p-3 rounded-md'>
                    <AiOutlineAppstore size={20} />
                    Browse All Categories
                    <AiOutlineDown />
                  </Space>
                </a>
              </Dropdown>
              <div>
              </div>
            </div>
            <div className=' col-span-12 xl:col-span-8'>
              <Menu onClick={onClick}
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
                selectedKeys={[current]}
                mode="horizontal" items={items} />
            </div>
            <div className='col-span-2 hidden xl:flex gap-3 justify-end items-center '>
              <img className='text-customText' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-headphone.svg" alt="" />
              <div>
                <p className='text-greenCustom text-2xl font-bold'>
                  1900 - 888
                </p>
                <p className='text-xs text-end text-custom'>24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <DrawerMobile onClose={onClose} open={open}
        openMenu={onClick} current={current} items={items} />
    </>
  )
}

export default HeaderComponent