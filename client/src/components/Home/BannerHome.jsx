import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSend } from "react-icons/fi";
import { Button, Input } from 'antd';
const BannerHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='px-4 mt-8'>
        <Slider {...settings} className='slide-banner'>
          <div>
            <div className='slide-banner-home1 h-[350px] xl:h-[530px]'>
              <div className=' absolute max-md:px-8 pt-12 px-14 xl:pt-20 xl:px-20'>
                <p className='max-md:text-3xl text-5xl xl:text-7xl font-semibold text-customText'>Don't miss amazing </p>
                <p className='max-md:text-3xl text-5xl xl:text-7xl font-semibold text-customText'>grocery deals</p>
                <p className=' text-2xl max-md:text-sm xl:text-3xl text-custom  xl:mt-10 mt-7'>Sign up for the daily newsletter</p>

                <div className='flex gap-2 items-center p-3 mt-7 xl:mt-16 rounded-3xl bg-white xl:w-[400px]'>
                  <FiSend size={30} className='text-custom' />
                  <Input
                    className=' max-md:text-sm  xl:text-base'
                    type="text" variant="borderless"
                    placeholder='Nhập Email của bạn' />
                  <Button type='text'
                    className='xl:px-4 xl:py-6 py-5 rounded-3xl text-slate-50 font-medium max-md:text-base text-lg bg-customBg'> Gửi</Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='slide-banner-home2 h-[350px] xl:h-[530px]'>
              <div className=' absolute max-md:px-8 pt-12 px-14 xl:pt-20 xl:px-20'>
                <p className='max-md:text-3xl text-5xl xl:text-7xl font-semibold text-customText'>Fresh Vegetables</p>
                <p className='max-md:text-3xl text-5xl xl:text-7xl font-semibold text-customText'>Big discount</p>
                <p className=' text-2xl max-md:text-sm xl:text-3xl text-custom  xl:mt-10 mt-7'>Save up to 50% off on your first order</p>
                <div className='flex gap-2 items-center p-3 mt-7 xl:mt-16 rounded-3xl bg-white xl:w-[400px]'>
                  <FiSend size={30} className='text-custom' />
                  <Input
                    className=' max-md:text-sm  xl:text-base'
                    type="text" variant="borderless"
                    placeholder='Nhập Email của bạn' />
                  <Button type='text'
                    className='xl:px-4 xl:py-6 py-5 rounded-3xl text-slate-50 font-medium max-md:text-base text-lg bg-customBg'> Gửi</Button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default BannerHome