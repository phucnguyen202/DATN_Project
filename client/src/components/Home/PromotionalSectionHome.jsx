import { Button, Input } from 'antd'
import React from 'react'
import { FiSend } from 'react-icons/fi'

const PromotionalSectionHome = () => {
  return (
    <>
      <div className='px-4 py-8'>
        <div className='slide-banner-home1 h-[350px] xl:h-[420px]'
          style={{
            backgroundImage: "url(https://www.niraagayurveda.com/assets/imgs/banner/banner-10.png)"
          }}>
          <div className='lg:px-20 max-md:px-10 relative'>
            <div className='lg:pt-20 max-md:pt-10'>
              <p className='max-md:text-2xl text-3xl xl:text-5xl font-semibold text-customText pb-2'>Stay home & get your daily</p>
              <p className='max-md:text-2xl text-3xl xl:text-5xl font-semibold text-customText'>needs from our shop</p>
              <p className=' text-xl max-md:text-sm xl:text-2xl text-custom mt-6'>Start You'r Daily Shopping with <span className='text-greenCustom'>Niraag India</span></p>
              <div className='flex gap-2 items-center p-3 mt-5 xl:mt-12 rounded-3xl bg-white w-[400px] max-md:w-full'>
                <FiSend size={30} className='text-custom' />
                <Input
                  className=' max-md:text-sm xl:text-base'
                  type="text" variant="borderless"
                  placeholder='Nhập Email của bạn' />
                <Button type='text'
                  className='xl:px-4 xl:py-6 py-5 rounded-3xl text-slate-50 font-medium max-md:text-base text-lg bg-customBg'> Gửi</Button>
              </div>
            </div>
            <div className='absolute right-0 max-md:hidden xl:-bottom-14 -bottom-[51px]'>
              <img className=' xl:w-[600px] xl:h-[320px] w-[460px] h-[240px]' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-9.png" alt="" />
            </div>
          </div>
        </div>

        <div className='grid xl:grid-cols-5 grid-cols-3 max-md:grid-cols-1 gap-4 mt-8'>
          <div className='flex items-center gap-4 bg-slate-100 rounded-xl p-4 group'>
            <img className='w-[60px] h-[60px] group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-1.svg" alt="" />
            <div>
              <p className='text-customText text-lg font-semibold'>Best prices & offers</p>
              <p className='text-custom'>Orders $50 or more</p>
            </div>
          </div>
          <div className='flex items-center gap-4 bg-slate-100 rounded-xl p-4 group'>
            <img className='w-[60px] h-[60px] group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-2.svg" alt="" />
            <div>
              <p className='text-customText text-lg font-semibold'>Free delivery</p>
              <p className='text-custom'>24/7 amazing services</p>
            </div>
          </div>
          <div className='flex items-center gap-4 bg-slate-100 rounded-xl p-4 group'>
            <img className='w-[60px] h-[60px] group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-3.svg" alt="" />
            <div>
              <p className='text-customText text-lg font-semibold'>Great daily deal</p>
              <p className='text-custom'>When you sign up</p>
            </div>
          </div>
          <div className='flex items-center gap-4 bg-slate-100 rounded-xl p-4 group'>
            <img className='w-[60px] h-[60px] group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-4.svg" alt="" />
            <div>
              <p className='text-customText text-lg font-semibold'>Wide assortment</p>
              <p className='text-custom'>Mega Discounts</p>
            </div>
          </div>
          <div className='flex items-center gap-4 bg-slate-100 rounded-xl p-4 group'>
            <img className='w-[60px] h-[60px] group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-5.svg" alt="" />
            <div>
              <p className='text-customText text-lg font-semibold'>Easy returns</p>
              <p className='text-custom'>Within 30 days</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default PromotionalSectionHome