import React from 'react';
import { Link } from 'react-router-dom';
const HeaderTop = () => {
  return (
    <>
      <div className='border-b-[1px] hidden md:block' >
        <div className='grid grid-cols-12'>
          <div className='col-span-6'>
            <div className="flex justify-start space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                About Us
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/account" className="hover:text-customText text-[13px]">
                My Account
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/wishlist" className="hover:text-customText text-[13px]">
                Wishlist
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/order-tracking" className="hover:text-customText text-[13px]">
                Order Tracking
              </Link>
            </div>
          </div>
          <div className='col-span-6'>
            <div className="flex justify-end space-x-2 px-2 py-[10px] text-custom">
              <Link to='/about' className="hover:text-customText text-[13px]">
                Need help? Call Vn: <span>0365228025</span>
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/account" className="hover:text-customText text-[13px]">
                English
              </Link>
              <span className='text-sm'>|</span>
              <Link to="/wishlist" className="hover:text-customText text-[13px]">
                VND
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTop