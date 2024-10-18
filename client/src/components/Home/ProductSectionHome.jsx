import { Rate, Space, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;
const ProductSectionHome = () => {
  return (
    <>
      <div className='xl:mt-28 lg:mt-[164px] max-md:py-6 px-4 pb-4'>
        <div className='grid xl:grid-cols-4 grid-cols-2 max-md:grid-cols-1 gap-6 '>
          <div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-customText pb-3">Bán Chạy Nhất</h2>
              {/* Underline */}
              <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
              {/* Full line */}
              <div className="border-b border-gray-200 mt-2"></div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-1.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-2.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-3.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-customText pb-3">Sản Phẩm Thịnh Hành</h2>
              {/* Underline */}
              <div className="absolute left-0 bottom-0 w-28 h-[2px]  bg-customBg mt-1"></div>
              {/* Full line */}
              <div className="border-b border-gray-200 mt-2"></div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-4.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-5.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-6.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-customText pb-3">Sản Phẩm Mới Thêm</h2>
              {/* Underline */}
              <div className="absolute left-0 bottom-0 w-28 h-[2px]  bg-customBg mt-1"></div>
              {/* Full line */}
              <div className="border-b border-gray-200 mt-2"></div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-7.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-8.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-9.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <h2 className="text-2xl font-semibold text-customText pb-3">Sản Phẩm Hàng Đầu</h2>
              {/* Underline */}
              <div className="absolute left-0 bottom-0 w-28 h-[2px]  bg-customBg mt-1"></div>
              {/* Full line */}
              <div className="border-b border-gray-200 mt-2"></div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-10.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-11.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
              <div className='flex gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                <div className='w-32'>
                  <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-12.jpg" alt="" />
                </div>
                <div>
                  <h5 className='text-customText font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
                  <Space className=''>
                    <Rate value={3} className='text-sm' />
                  </Space>
                  <Space className=''>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom font-medium text-sm'>$14.99</Text>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSectionHome