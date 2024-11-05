import { Badge, Dropdown, message, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { cart } from '../db/Cart';
import { Link } from 'react-router-dom';

const CartComponent = () => {
  const [itemsCart, setItemsCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getToCart = async () => {
      try {
        const items = cart.map((item, index) => ({
          key: `${index + 1}`,
          label: (
            <div className='flex justify-between w-full'>
              <div className='flex gap-3'>
                <img className='w-16 h-16 rounded-md' src={item.img} alt={item.title} />
                <div>
                  <p className='text-base text-customText line-clamp-1 w-60'>{item.title}</p>
                  <Space>
                    <p className='text-customText'>{item.count}</p><p>x</p>
                    <p className='text-greenCustom font-medium'>{item.price}</p>
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
        const initialTotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
        setTotal(initialTotal);
        const count = cart.length
        setCount(count);
      } catch (e) {
        message.error(('hahahahaha'))
      }
    }
    getToCart();
  }, []);

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
            <p className='text-greenCustom font-medium text-base'>{total}</p>
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
          <Badge color='#3BB77E' count={count} >
            <MdOutlineShoppingCart className='text-[#343a40]' size={25} />
          </Badge>
          <span className='text-base text-custom font-medium hidden xl:flex'>Cart</span>
        </div>
      </Dropdown >
    </>
  )
}

export default CartComponent