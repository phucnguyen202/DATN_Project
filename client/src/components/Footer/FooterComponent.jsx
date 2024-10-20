import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiHeadphones, FiSend } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbClockHour4 } from "react-icons/tb";
const FooterComponent = () => {
  return (
    <footer >
      <div className='border-b-[1px] border-green-200'>
        <div className='grid xl:grid-cols-5 grid-cols-3 max-md:grid-cols-2 gap-4 px-4 my-12'>
          <div>
            <img className='mb-4' src="https://www.niraagayurveda.com/assets/imgs/theme/logo.svg" alt="" />
            <p className='text-lg mb-7'>Awesome grocery store website template</p>
            <div>
              <div className='flex items-center gap-3 mb-2'>
                <GrLocation className='text-greenCustom' size={20} />
                <p className='text-lg'><b className='text-customText'>Address:</b> 48 Cao Thắng</p>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <FiHeadphones className='text-greenCustom' size={20} />
                <p className='text-lg'> <b className='text-customText'>Call Us:</b> 540-025-124553</p>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <FiSend size={20} className='text-greenCustom' />
                <p className='text-lg'><b className='text-customText'>Email:</b> sale@Nest.com</p>
              </div>
              <div className='flex items-center gap-3 mb-2'>
                <TbClockHour4 size={20} className='text-greenCustom' />
                <p className='text-lg'><b className='text-customText'>Hours:</b> 10:00 - 18:00, Mon - Sat</p>
              </div>
            </div>
            <div className='mt-10'>
              <p className='mb-6 text-lg'>Secured Payment Gateways</p>
              <div>
                <img src="https://www.niraagayurveda.com/assets/imgs/theme/payment-method.png" alt="" />
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-customText text-2xl font-medium mb-4'>Liên Hệ</h3>
            <ul className='flex flex-col gap-4'>
              <li className='text-base text-customText'>Về chúng tôi</li>
              <li className='text-base text-customText'>Thông tin giao hàng</li>
              <li className='text-base text-customText'>Chính sách bảo mật</li>
              <li className='text-base text-customText'>Điều khoản & Điều kiện</li>
              <li className='text-base text-customText'>Liên hệ với chúng tôi</li>
              <li className='text-base text-customText'>Trung tâm hỗ trợ</li>
            </ul>
          </div>
          <div>
            <h3 className='text-customText text-2xl font-medium mb-4'>Tài Khoản</h3>
            <ul className='flex flex-col gap-4'>
              <li className='text-base text-customText'>Đăng nhập</li>
              <li className='text-base text-customText'>Xem giỏ hàng</li>
              <li className='text-base text-customText'>Danh sách yêu thích của tôi</li>
              <li className='text-base text-customText'>Theo dõi đơn hàng của tôi</li>
              <li className='text-base text-customText'>Khuyến mãi</li>
              <li className='text-base text-customText'> Chi tiết vận chuyển</li>
            </ul>
          </div>
          <div>
            <h3 className='text-customText text-2xl font-medium mb-4'>Công Ty</h3>
            <ul className='flex flex-col gap-4'>
              <li className='text-base text-customText'>Trở thành nhà cung cấp</li>
              <li className='text-base text-customText'>Chương trình liên kết</li>
              <li className='text-base text-customText'>Kinh doanh trang trại</li>
              <li className='text-base text-customText'>Nghề nông</li>
              <li className='text-base text-customText'>Nhà cung cấp của chúng tôi</li>
              <li className='text-base text-customText'>Khả năng tiếp cận</li>
              <li className='text-base text-customText'> So sánh sản phẩm</li>
            </ul>
          </div>
          <div>
            <h3 className='text-customText text-2xl font-medium mb-4'>Phổ Biến</h3>
            <ul className='flex flex-col gap-4'>
              <li className='text-base text-customText'>Về chúng tôi</li>
              <li className='text-base text-customText'>Thông tin giao hàng</li>
              <li className='text-base text-customText'>Chính sách bảo mật</li>
              <li className='text-base text-customText'>Điều khoản & Điều kiện</li>
              <li className='text-base text-customText'>Liên hệ với chúng tôi</li>
              <li className='text-base text-customText'>Trung tâm hỗ trợ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-8 px-4'>
        <div className='grid xl:grid-cols-3 grid-cols-2  max-md:grid-cols-1'>
          <div className='max-md:text-center'>
            <p className='text-base text-custom'>© 2022, <b className='text-greenCustom'>Nest</b> - HTML Ecommerce Template <br />All rights reserved</p>
          </div>
          <div className='max-md:hidden lg:hidden xl:block'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 items-center'>
                <PiPhoneCallLight size={40} className='text-custom' />
                <div>
                  <p className='text-3xl text-center font-bold text-greenCustom'>1900 - 6666</p>
                  <p className='text-sm text-custom text-center'>Working 8:00 - 22:00</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <PiPhoneCallLight size={40} className='text-custom' />
                <div>
                  <p className='text-3xl text-center font-bold text-greenCustom'>1900 - 8888</p>
                  <p className='text-sm text-custom text-center'>24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
          <div className='max-md:mt-5'>
            <div className='flex items-center max-md:justify-center lg:justify-end gap-3'>
              <p className='text-lg font-semibold'>Follow Us</p>
              <ul className='flex gap-1'>
                <li className='w-8 h-8 p-2 flex justify-center items-center  bg-customBg rounded-full'><FaFacebookF size={20} className='text-white' /></li>
                <li className='w-8 h-8 p-2 flex justify-center items-center  bg-customBg rounded-full'><FaTwitter size={20} className='text-white' /></li>
                <li className='w-8 h-8 p-2 flex justify-center items-center  bg-customBg rounded-full'><FaInstagram size={20} className='text-white' /></li>
                <li className='w-8 h-8 p-2 flex justify-center items-center  bg-customBg rounded-full'><FaPinterest size={20} className='text-white' /></li>
                <li className='w-8 h-8 p-2 flex justify-center items-center  bg-customBg rounded-full'><FaYoutube size={20} className='text-white' /></li>
              </ul>
            </div>
            <p className='text-sm text-custom max-md:text-center lg:text-end'>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default FooterComponent