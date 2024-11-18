import { Badge, Button, Card, Progress, Rate, Space, Tabs, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";

const { Title, Text } = Typography;
const operations = <Title level={2} style={{ margin: '0px', color: '#253D4E' }} className='max-md:hidden'>Sản Phẩm Bán Chạy</Title>
const items = [
  { key: '1', label: 'Nổi bật', },
  { key: '2', label: 'Phổ biến' },
  { key: '3', label: 'Mới thêm' },
];

const BestSellingProduct = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [sold, setSold] = useState(90); // initial value
  const total = 120; // total items

  const handleSliderChange = (value) => {
    setSold(value);
  };
  const onChange = (key) => {
    setActiveTab(key);
  };
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1366, // Màn hình có độ rộng nhỏ hơn 1366px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 768, // Màn hình có độ rộng nhỏ hơn 768px
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 480, // Màn hình có độ rộng nhỏ hơn 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const renderCards = (tabkey) => (
    <div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-3 relative max-md:hidden'>
          <div className='banner_bestSellingProduct h-[490px] xl:h-[520px] rounded-xl '>
            <div className=' absolute py-8 px-9'>
              <p className='font-semibold text-customText text-5xl mb-12'> Bring nature<br /> into your<br />home</p>
              <Button
                className=" text-slate-50  bg-customBg hover:bg-customBg lg:text-xs xl:mt-6 mt-2"
                icon={<GrFormNextLink size={20} />}>Shop Now</Button>
            </div>
          </div>
        </div>
        <div className='lg:col-span-9 max-md:col-span-12'>
          <Slider ref={sliderRef} {...settings}>
            <div className='relative group'>
              <Badge.Ribbon text={'Save 15%'}>
                <Card>
                  {/* <img
                    className='group-hover:hidden transform transition-transform duration-1000 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                    alt=""
                  />
                  <img
                    className='hidden group-hover:block transform transition-transform duration-700 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                    alt=""
                  /> */}
                  <div className='flex justify-center'>
                    <img
                      className='transform w-[200px] transition-transform duration-1000 ease-in-out hover:scale-110'
                      src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                      alt=""
                    />
                  </div>

                  <Text type="secondary">Snack</Text>
                  <Card.Meta
                    className="custom-card-meta py-2"
                    title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
                  <Rate value={3} className='text-sm mt-6' />
                  <div className='flex gap-3 items-center'>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-custom  font-medium text-sm'>$14.99</Text>
                  </div>
                  <Progress
                    percent={(sold / total) * 100}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#52c41a', // green color
                      '100%': '#d9d9d9', // gray color for the background
                    }}
                  />
                  <div className='mt-2 mb-3'>
                    {/* Slider */}
                    <Slider
                      min={0}
                      max={total}
                      value={sold}
                      onChange={handleSliderChange}
                    />
                    <div className=' '>Sold: {sold}/{total}</div>
                  </div>
                  <button className=' w-full flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-3'>
                    <IoCartOutline size={17} />
                    Add To Cart
                  </button>
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
                <Card>
                  <div className='flex justify-center'>
                    <img
                      className='transform w-[200px] transition-transform duration-1000 ease-in-out hover:scale-110'
                      src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                      alt=""
                    />
                  </div>
                  {/* <img
                    className=' hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                    alt=""
                  /> */}
                  <Text type="secondary">Snack</Text>
                  <Card.Meta
                    className="custom-card-meta py-2"
                    title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
                  <Rate value={3} className='text-sm mt-6' />
                  <div className='flex gap-3 items-center'>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-slate-400 font-medium text-sm'>$14.99</Text>
                  </div>
                  <Progress
                    percent={(sold / total) * 100}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#52c41a', // green color
                      '100%': '#d9d9d9', // gray color for the background
                    }}
                  />
                  <div className='mt-2 mb-3'>
                    {/* Slider */}
                    <Slider
                      min={0}
                      max={total}
                      value={sold}
                      onChange={handleSliderChange}
                    />
                    <div>Sold: {sold}/{total}</div>
                  </div>
                  <button className=' w-full flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-3'>
                    <IoCartOutline size={17} />
                    Add To Cart
                  </button>
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
                <Card>
                  <div className='flex justify-center'>
                    <img
                      className='transform w-[200px] transition-transform duration-1000 ease-in-out hover:scale-110'
                      src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-1.jpg"
                      alt=""
                    />
                  </div>
                  {/* <img
                    className=' hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                    alt=""
                  /> */}
                  <Text type="secondary">Snack</Text>
                  <Card.Meta
                    className="custom-card-meta py-2"
                    title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
                  <Rate value={3} className='text-sm mt-6' />
                  <div className='flex gap-3 items-center'>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-slate-400 font-medium text-sm'>$14.99</Text>
                  </div>
                  <Progress
                    percent={(sold / total) * 100}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#52c41a', // green color
                      '100%': '#d9d9d9', // gray color for the background
                    }}
                  />
                  <div className='mt-2 mb-3'>
                    {/* Slider */}
                    <Slider
                      min={0}
                      max={total}
                      value={sold}
                      onChange={handleSliderChange}
                    />
                    <div>Sold: {sold}/{total}</div>
                  </div>
                  <button className=' w-full flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-3'>
                    <IoCartOutline size={17} />
                    Add To Cart
                  </button>
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
                <Card>
                  <div className='flex justify-center'>
                    <img
                      className='transform w-[200px] transition-transform duration-1000 ease-in-out hover:scale-110'
                      src="https://www.niraagayurveda.com/assets/imgs/shop/product-3-1.jpg"
                      alt=""
                    />
                  </div>
                  {/* <img
                    className=' hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                    alt=""
                  /> */}
                  <Text type="secondary">Snack</Text>
                  <Card.Meta
                    className="custom-card-meta py-2"
                    title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
                  <Rate value={3} className='text-sm mt-6' />
                  <div className='flex gap-3 items-center'>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-slate-400 font-medium text-sm'>$14.99</Text>
                  </div>
                  <Progress
                    percent={(sold / total) * 100}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#52c41a', // green color
                      '100%': '#d9d9d9', // gray color for the background
                    }}
                  />
                  <div className='mt-2 mb-3'>
                    {/* Slider */}
                    <Slider
                      min={0}
                      max={total}
                      value={sold}
                      onChange={handleSliderChange}
                    />
                    <div>Sold: {sold}/{total}</div>
                  </div>
                  <button className=' w-full flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-3'>
                    <IoCartOutline size={17} />
                    Add To Cart
                  </button>
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
                <Card>
                  <div className='flex justify-center'>
                    <img
                      className='transform w-[200px] transition-transform duration-1000 ease-in-out hover:scale-110'
                      src="https://www.niraagayurveda.com/assets/imgs/shop/product-4-1.jpg"
                      alt=""
                    />
                  </div>
                  {/* <img
                    className=' hidden transform transition-transform duration-700 ease-in-out hover:scale-110'
                    src="https://www.niraagayurveda.com/assets/imgs/shop/product-1-2.jpg"
                    alt=""
                  /> */}
                  <Text type="secondary">Snack</Text>
                  <Card.Meta
                    className="custom-card-meta py-2"
                    title="Seeds of Change Organic Quinoa, Brown, & Red Rice" />
                  <Rate value={3} className='text-sm mt-6' />
                  <div className='flex gap-3 items-center'>
                    <Text className='text-greenCustom font-medium text-lg'>$14.99</Text>
                    <Text className='text-slate-400 font-medium text-sm'>$14.99</Text>
                  </div>
                  <Progress
                    percent={(sold / total) * 100}
                    showInfo={false}
                    strokeColor={{
                      '0%': '#52c41a', // green color
                      '100%': '#d9d9d9', // gray color for the background
                    }}
                  />
                  <div className='mt-2 mb-3'>
                    {/* Slider */}
                    <Slider
                      min={0}
                      max={total}
                      value={sold}
                      onChange={handleSliderChange}
                    />
                    <div>Sold: {sold}/{total}</div>
                  </div>
                  <button className=' w-full flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-3'>
                    <IoCartOutline size={17} />
                    Add To Cart
                  </button>
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
          </Slider>
        </div>
      </div>
    </div >
  );
  return (
    <div className="px-4 py-6 overflow-hidden">
      <Tabs
        className='pb-10 font-medium'
        defaultActiveKey="1"
        items={items} onChange={onChange}
        tabBarExtraContent={operations} />
      {renderCards(activeTab)}
    </div>
  )
}

export default BestSellingProduct