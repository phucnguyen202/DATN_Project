import { Badge, Dropdown, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import handleAPI from '../apis/HandleAPI';
import { updateCartCount } from '../redux/reducers/productReducer';

const CartComponent = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)
  const cartCount = useSelector(state => state?.product?.cartCount);
  const dispatch = useDispatch();
  const [itemsCart, setItemsCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [dataCart, setDataCart] = useState([]);

  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    if (user?.idNguoiDung) {
      getItemsCart(user.idNguoiDung);
    }
  }, [user, cartCount]);

  const getItemsCart = async (id) => {
    try {
      const res = await handleAPI(`/khachhang/getCartById?userId=${id}`, '', 'get');
      if (res.success) {
        const processedData = res.data.map(item => ({
          ...item,
          hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
        }));
        setDataCart(processedData);
      }
      dispatch(updateCartCount(res.data.length));
    } catch (err) {
      console.log('error::', err)
    }
  }
  useEffect(() => {
    const getToCart = async () => {
      if (dataCart?.length > 0) {
        const items = dataCart?.map((item, index) => ({
          key: `${index + 1}`,
          label: (
            <div className='flex justify-between w-full'>
              <div className='flex gap-3'>
                <img className='w-16 h-16 rounded-md' src={item.hinhAnh[0]} alt={item.tenSanPham} />
                <div>
                  <p className='text-base text-customText line-clamp-1 w-60'>{item.tenSanPham}</p>
                  <Space>
                    <p className='text-customText'>{item.soLuong}</p><p>x</p>
                    <p className='text-greenCustom font-medium'>{formatCurrency(item.gia)}</p>
                  </Space>
                </div>
              </div>
              <div>
                <AiOutlineCloseSquare size={20} className='text-greenCustom' />
              </div>
            </div>
          )
        }))
        setItemsCart(items);
        const initialTotal = dataCart?.reduce((sum, item) => sum + (item.gia * item.soLuong), 0);
        setTotal(initialTotal);
      }
    }
    if (dataCart) {
      getToCart();
    }
  }, [dataCart]);

  const menuItems = [
    ...itemsCart,
    {
      type: 'divider',
    },
    {
      key: 'total',
      label: (
        <div className='w-full'>
          <div className='flex justify-between gap-4 mb-4'>
            <p className='text-custom font-medium text-base'>Total:</p>
            <p className='text-greenCustom font-medium text-base'>{formatCurrency(total)}</p>
          </div>
          <div className='flex justify-between'>
            <Link to={'/cart'}
              className='border-[1px] text-customText text-base rounded-md font-medium px-6 py-3'>Xem giỏ hàng</Link>
            <Link
              to={'/cart'}
              type='primary'
              className='bg-customBg text-white text-base rounded-md font-medium px-6 py-3'>Đặt hàng</Link>
          </div>
        </div>
      ),
    },
  ]
  return (
    <>
      <Dropdown
        className='cursor-pointer'
        menu={{ items: menuItems }}
        placement="bottomLeft"
      >
        <div className='flex gap-2 items-center'>
          <Badge color='#3BB77E' count={cartCount} >
            <MdOutlineShoppingCart className='text-[#343a40]' size={22} />
          </Badge>
          <span className='text-sm text-custom font-medium hidden xl:flex'>Giỏ hàng</span>
        </div>
      </Dropdown >
    </>
  )
}

export default CartComponent