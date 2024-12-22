import { Badge, Dropdown, Input, Menu, message, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineAppstore, AiOutlineDown, AiOutlineEnvironment, AiOutlineLogout, AiOutlineMenu, AiOutlineSetting, AiOutlineTag, AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaHotjar, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import handleAPI from '../../apis/HandleAPI';
import CartComponent from '../CartComponent';
import DrawerMobile from './components/DrawerMobile';
import HeaderTop from './components/HeaderTop';
import { remoAuth } from '../../redux/reducers/authReducer';


const HeaderComponent = () => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(state => state?.auth?.currentData?.user)
  const wishListCount = useSelector(state => state?.product?.wishListCount);

  const [dataSource, setDataSource] = useState([]);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dashboardRoutes = {
    khachhang: '/dashboard/customer/order',
    banhang: '/dashboard/seller/taikhoan',
    admin: '/admin/all-account',
    nhacungcap: '/dashboard-nhacungcap',
    nhanvien: '/dashboard/nhanvien/list-products'
  };

  const handleLogOut = async () => {
    await dispatch(remoAuth());
    localStorage.removeItem('authData');
    navigate('/login');
  };

  const itemsAccount = [
    (user?.quyen === 'admin' || user?.quyen === 'khachhang' || user?.quyen === 'nhanvien' || user?.quyen === 'banhang' || user?.quyen === 'nhacungcap') && {
      key: '1',
      icon: <AiOutlineSetting className='text-[#343a40]' size={16} />,
      label: (
        <Link className='text-[#343a40]' to={dashboardRoutes[user?.quyen]}>
          Dashboard
        </Link>
      ),
    },
    {
      key: '2',
      icon: <AiOutlineEnvironment className='text-[#343a40]' size={16} />,
      label: (
        <Link to='/'>
          Đơn hàng
        </Link>
      ),
    },
    {
      key: '3',
      icon: <AiOutlineTag className='text-[#343a40]' size={16} />,
      label: (
        <Link to='/'>
          Khuyến mãi
        </Link>
      ),
    },
    {
      key: '4',
      icon: <FaRegHeart className='text-[#343a40]' size={16} />,
      label: (
        <Link to='/'>
          Danh sách yêu thích
        </Link>
      ),
    },
    {
      key: '5',
      icon: <AiOutlineUser className='text-[#343a40]' size={16} />,
      label: (
        <Link to={user?.quyen === 'banhang' ? '/dashboard-nhabanhang' : user?.quyen === 'khachhang' ? '/dashboard/customer/info-khachhang' : '/dashboard-nhacungcap'}>
          Tài khoản
        </Link>
      ),
    },
    {
      key: '6',
      icon: <AiOutlineLogout className='text-[#343a40]' size={16} />,
      label: (
        <Link to='/' onClick={handleLogOut}> Sign out  </Link >
      ),
    },
  ];

  //category
  useEffect(() => {
    const getAllCategory = async () => {
      setIsLoading(true);
      try {
        const res = await handleAPI('/getAlldanhmuc', '', 'get');
        if (res.data) {
          setDataSource(res.data.result);
        }
      } catch (e) {
        message.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategory();
  }, []);

  // hien thi category
  useEffect(() => {
    const getToCategory = () => {
      if (dataSource?.length) {
        const items = dataSource.map((item, index) => (
          {
            key: `${item.idDanhMuc}`,
            label: (
              <a
                href="" className="text-gray-custom flex gap-3 items-center">
                <img className="w-7 h-7" src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
                <span>{item.tenDanhMuc}</span>
              </a>
            ),
          }
        ));
        setCategory(items);
      }
    };

    if (dataSource) {
      getToCategory();
    }
  }, [dataSource]);

  const itemsCategory = [
    {
      key: 0,
      label: (<a href="" className='text-gray-custom flex gap-3 items-center'>
        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
        <span>Tất cả sản phẩm</span>
      </a>),
    },
    ...category,
  ];

  const items = [
    {
      icon: <FaHotjar size={20} style={{ color: '#3BB77E' }} />,
      label: <Link style={{ color: '#253D4E' }}
        className='text-base font-medium' to='/'>Khuyến mại</Link>,
      key: 0,
    },
    {
      label: <Link style={{ color: '#253D4E' }}
        className='text-base  font-medium' to='/'>Trang chủ</Link>,
      key: 1,
    },
    {
      label: <Link style={{ color: '#253D4E' }}
        className='text-base  font-medium' to='/storepage'>Cửa hàng</Link>,
      key: 3,
    },
    {
      key: 4,
      label: <Link style={{
        color: '#253D4E'
      }} className='text-base  font-medium' to='/'>Nhà cung cấp</Link>,
    },
    {
      key: 6,
      label: <Link style={{
        color: '#253D4E'
      }} className='text-base  font-medium' to='/'>Blog</Link>,
    },
    {
      key: 9,
      label: <Link style={{
        color: '#253D4E'
      }} className='text-base  font-medium' to='/about'>Giới thiệu</Link>,
    },
    {
      key: 8,
      label: <Link style={{
        color: '#253D4E'
      }} className='text-base  font-medium' to='/contact'>Liên hệ</Link>,
    },
  ];
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
            <p className='text-slate-50 text-center text-xs p-2'>Khai trương, giảm giá <b>lên đến 15%</b> cho tất cả các mặt hàng,<br /> Chỉ còn <b>3 ngày</b> cuối</p>
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
              style={{ borderRadius: '3px', border: '2px solid #BCE3C9', }}
              className='col-span-7 hidden md:flex justify-center items-center gap-2 '>
              <Dropdown
                className=' w-[30%] xl:w-[20%] cursor-pointer'
                menu={{ items: itemsCategory, }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='text-sm font-[500] flex justify-center text-customText'>
                    Danh mục
                    <AiOutlineDown />
                  </Space>
                </a>
              </Dropdown>
              <span className='w-[1px] h-6 bg-slate-300'></span>
              <Input
                style={{ border: 'none', }}
                variant="borderless"
                className='py-3 text-customText placeholder-[#a74040]'
                placeholder="Tìm kiếm sản phẩm..."
                suffix={<BiSearch className="text-slate-500" size={25} />}
              />
            </div>
            <div className='col-span-3 hidden max-md:flex xl:flex gap-6 justify-end'>
              <Link to={'/wishlist'} className='flex gap-2 items-center cursor-pointer'>
                <Badge color='#3BB77E' count={wishListCount} >
                  <FaRegHeart className='text-[#343a40]' size={22} />
                </Badge>
                <span className='text-sm text-custom max-md:hidden font-medium'>Yêu thích</span>
              </Link>

              <CartComponent />
              <Dropdown
                className=' cursor-pointer max-md:hidden'
                menu={{ items: itemsAccount, }}
                placement="bottomLeft"
              >
                <div className='flex gap-1 items-center'>
                  <AiOutlineUser className='text-[#343a40]' size={22} />
                  <span className='text-sm text-custom font-medium'>Tài khoản</span>
                </div>
              </Dropdown>
            </div>
            <div className='col-span-2 xl:hidden'></div>
          </div>
        </div>
        <div className='border-b-[1px] hidden md:block'>
          <div className='grid grid-cols-12 px-4 py-4'>
            <div className='col-span-2 hidden xl:flex items-center'>
              <Dropdown menu={{ items: itemsCategory, }} trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='text-base font-semibold text-slate-50 bg-customBg p-3 rounded-md'>
                    <AiOutlineAppstore size={20} />
                    Duyệt danh mục
                    <AiOutlineDown />
                  </Space>
                </a>
              </Dropdown>
              <div>
              </div>
            </div>
            <div className='col-span-12 xl:col-span-8'>
              <Menu
                onClick={onClick}
                style={{ display: 'flex', justifyContent: 'center' }}
                selectedKeys={[current]}
                mode="horizontal" items={items} />
            </div>
            <div className='col-span-2 hidden xl:flex gap-3 justify-end items-center '>
              <img className='text-customText' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-headphone.svg" alt="" />
              <div>
                <p className='text-greenCustom text-2xl font-bold'>
                  1900 - 888
                </p>
                <p className='text-xs text-end text-custom'>24/7 trung tâm hỗ trợ</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <DrawerMobile
        onClose={onClose}
        open={open}
        openMenu={onClick}
        current={current} items={items} />
    </>
  )
}

export default HeaderComponent