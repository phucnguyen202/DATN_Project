import { Empty } from 'antd';
import React, { useEffect, useState } from 'react';
import handleAPI from '../apis/HandleAPI';
import CardComponent from '../components/CardComponent';
import { updateWishListCount } from '../redux/reducers/productReducer';
import { useDispatch } from 'react-redux';

const PageWishlist = () => {
  const [wishList, setWishList] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistProducts()
  }, [])

  const getWishlistProducts = async () => {
    try {
      const res = await handleAPI('/khachhang/getWishlistProducts', '', 'get');
      if (res.success) {
        const processedData = res.data.map(item => ({
          ...item,
          hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
        }));
        setWishList(processedData);
        dispatch(updateWishListCount(res.data.length));
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      {wishList.length === 0 ? (
        <Empty
          description="Bạn chưa có sản phẩm yêu thích nào"
          className="my-8"
        />
      ) : (
        <div className="px-4 py-6">
          <h1 className="text-3xl font-semibold text-customText mb-10">Danh sách sản phẩm yêu thích</h1>
          <div className='grid max-md:grid-cols-1 grid-cols-3 xl:grid-cols-5 gap-4'>
            {
              wishList.length > 0 && wishList.map((item, index) => (
                < CardComponent key={index} item={item} />
              ))
            }
          </div>
        </div>
      )
      }
    </>
  )
}

export default PageWishlist