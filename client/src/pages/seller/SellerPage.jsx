import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SellerPage = () => {
  return (
    <>
      <div>
        <div className='border-b-[1px]'>
          <div className='px-4 py-5'>
            <Breadcrumb
              items={[
                {
                  title: <p className='font-medium'>Trang chủ</p>,
                },
                {
                  title: <Link className='font-medium' to={'/product'}>Điền tên shop vào đây</Link>,
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SellerPage