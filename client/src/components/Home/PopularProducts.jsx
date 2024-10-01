import { Badge, Card, Rate, Space, Tabs, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
const { Title, Text } = Typography;
const operations = <Title level={2} style={{ margin: '0px', color: '#253D4E' }} className='max-md:hidden'>Sản Phẩm Phổ Biến</Title>
const items = [
  { key: '1', label: 'All', },
  { key: '2', label: 'Milks & Dairies' },
  { key: '3', label: 'Coffees & Teas' },
  { key: '4', label: 'Pet Foods' },
  { key: '5', label: 'Meats', },
  { key: '6', label: 'Vegetables' },
  { key: '7', label: 'Fruits', }
];

const PopularProducts = () => {
  const [activeTab, setActiveTab] = useState('1');
  const onChange = (key) => {
    setActiveTab(key);
  };
  const renderCards = (tabkey) => (
    <div>
      <div className='grid max-md:grid-cols-1 grid-cols-3 xl:grid-cols-5 gap-6'>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
        <div className='relative group'>
          <Badge.Ribbon text={'sale'}>
            <Card
              hoverable
            >
              <img
                className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                className='group-hover:block hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
              <Text type="secondary">Snack</Text>
              <Card.Meta
                className="custom-card-meta py-2"
                title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
              <Space className='flex justify-between py-2'>
                <Rate value={3} className='text-sm' />
                <Text type="secondary">By <span className='text-greenCustom'>NestFood</span> </Text>
              </Space>
              <Space className='flex justify-between items-center pt-2'>
                <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-1 px-3'>
                  <IoCartOutline size={17} />
                  Add
                </button>
              </Space>
            </Card>
          </Badge.Ribbon>

          <div className=' opacity-0 group-hover:opacity-100 transition duration-300 absolute flex top-28 left-1/2 transform -translate-x-1/2 '>
            <Tooltip placement="topLeft" color='#3BB77E' title={'Thêm vào yêu thích'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoMdHeartEmpty size={16} /></button>
            </Tooltip>
            <Tooltip placement="top" color='#3BB77E' title={'Chi tiết'}>
              <button className=' flex justify-center items-center gap-2 font-medium rounded-md bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50  py-2 px-3'><IoEyeOutline size={16} /></button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div >
  );


  return (
    <div className="px-4 py-6">
      <Tabs
        className='pb-10 font-medium'
        defaultActiveKey="1"
        items={items} onChange={onChange}
        tabBarExtraContent={operations} />
      {renderCards(activeTab)}
    </div>
  )
}

export default PopularProducts