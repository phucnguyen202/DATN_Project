import { Card, Rate, Space, Typography } from 'antd';
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
const { Title, Text } = Typography;
const DealsOfTheDayHome = () => {
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
      <div className="px-4 py-6">
        <Title level={2} style={{ margin: '0px', color: '#253D4E' }} className=' pb-10'>Khuyến Mãi Trong Ngày</Title>
        <div className='grid max-md:grid-cols-1 grid-cols-3 xl:grid-cols-4 gap-4'>
          <div className='relative group max-md:mb-24'>
            <div className=''>
              <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-5.png" alt="" />
            </div>
            <div className='absolute z-10 top-[120px] group-hover:-translate-y-2 p-3 transition-transform transform duration-300 ease-in-out'>
              <div className='grid grid-cols-4 gap-3 mb-3'>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Davs</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Hours</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Mins</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Sec</p>
                </div>
              </div>
              <Card hoverable>
                <Card.Meta
                  className="custom-card-meta py-2"
                  title="Hạt điều sạch được thu hoạch từ nông trại uy tín, sau đó được rang với muối tự nhiên để giữ trọn hương vị thơm ngon và độ giòn tan." />
                <Space className='flex justify-between py-2'>
                  <Rate value={3} className='text-sm' />
                  <Text type="secondary">By <span className='text-greenCustom'>Viet Green</span> </Text>
                </Space>
                <Space className='flex justify-between items-center pt-2'>
                  <Text className='text-greenCustom font-medium text-lg'>{formatCurrency(30000)} VNĐ</Text>
                  <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                    <IoCartOutline size={17} />
                    Thêm
                  </button>
                </Space>
              </Card>
            </div>
          </div>
          <div className='relative group max-md:mb-24'>
            <div className=''>
              <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-6.png" alt="" />
            </div>
            <div className='absolute z-10 top-[120px] group-hover:-translate-y-2 p-3 transition-transform transform duration-300 ease-in-out'>
              <div className='grid grid-cols-4 gap-3 mb-3'>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Davs</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Hours</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Mins</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Sec</p>
                </div>
              </div>
              <Card hoverable>
                <Card.Meta
                  className="custom-card-meta py-2"
                  title="Hạt điều sạch được thu hoạch từ nông trại uy tín, sau đó được rang với muối tự nhiên để giữ trọn hương vị thơm ngon và độ giòn tan." />
                <Space className='flex justify-between py-2'>
                  <Rate value={3} className='text-sm' />
                  <Text type="secondary">By <span className='text-greenCustom'>Viet Green</span> </Text>
                </Space>
                <Space className='flex justify-between items-center pt-2'>
                  <Text className='text-greenCustom font-medium text-lg'>{formatCurrency(30000)} VNĐ</Text>
                  <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                    <IoCartOutline size={17} />
                    Thêm
                  </button>
                </Space>
              </Card>
            </div>
          </div>
          <div className='relative group max-md:hidden'>
            <div className=''>
              <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-7.png" alt="" />
            </div>
            <div className='absolute top-[120px] group-hover:-translate-y-2 p-3 transition-transform transform duration-300 ease-in-out'>
              <div className='grid grid-cols-4 gap-3 mb-3'>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Davs</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Hours</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Mins</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Sec</p>
                </div>
              </div>
              <Card hoverable>
                <Card.Meta
                  className="custom-card-meta py-2"
                  title="Hạt điều sạch được thu hoạch từ nông trại uy tín, sau đó được rang với muối tự nhiên để giữ trọn hương vị thơm ngon và độ giòn tan." />
                <Space className='flex justify-between py-2'>
                  <Rate value={3} className='text-sm' />
                  <Text type="secondary">By <span className='text-greenCustom'>Viet Green</span> </Text>
                </Space>
                <Space className='flex justify-between items-center pt-2'>
                  <Text className='text-greenCustom font-medium text-lg'>{formatCurrency(30000)} VNĐ</Text>
                  <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                    <IoCartOutline size={17} />
                    Thêm
                  </button>
                </Space>
              </Card>
            </div>
          </div>
          <div className='relative group max-md:hidden hidden xl:block'>
            <div className=''>
              <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-8.png" alt="" />
            </div>
            <div className='absolute top-[120px] group-hover:-translate-y-2 p-3 transition-transform transform duration-300 ease-in-out'>
              <div className='grid grid-cols-4 gap-3 mb-3'>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Davs</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Hours</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Mins</p>
                </div>
                <div className='bg-white py-3 text-center rounded-md'>
                  <p className='text-greenCustom text-xl font-semibold'>160</p>
                  <p className='text-custom font-medium'>Sec</p>
                </div>
              </div>
              <Card hoverable>
                <Card.Meta
                  className="custom-card-meta py-2"
                  title="Hạt điều sạch được thu hoạch từ nông trại uy tín, sau đó được rang với muối tự nhiên để giữ trọn hương vị thơm ngon và độ giòn tan." />
                <Space className='flex justify-between py-2'>
                  <Rate value={3} className='text-sm' />
                  <Text type="secondary">By <span className='text-greenCustom'>Viet Green</span> </Text>
                </Space>
                <Space className='flex justify-between items-center pt-2'>
                  <Text className='text-greenCustom font-medium text-lg'>{formatCurrency(30000)} VNĐ</Text>
                  <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                    <IoCartOutline size={17} />
                    Thêm
                  </button>
                </Space>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DealsOfTheDayHome