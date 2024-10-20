import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailPage = () => {
  const param = useParams()
  return (
    <div className=''>
      <div className='border-b-[1px]'>
        <div className='px-4 py-5'>
          <Breadcrumb
            items={[
              {
                title: <p className='font-medium'>Home</p>,
              },
              {
                title: <Link className='font-medium' to={'/product'}>Products</Link>,
              },
              {
                title: <p className='font-medium text-greenCustom'>Application List</p>,
              }
            ]}
          />
        </div>
      </div>
      <div className='px-10 pt-4'>
        <div className='grid grid-cols-12'>
          <div className='col-span-10'>

          </div>
          <div className='col-span-2'>2</div>
        </div>
      </div>
    </div >
  )
}

export default DetailPage