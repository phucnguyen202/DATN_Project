import { Drawer, Input, Menu } from "antd";
import { AiOutlineCloseSquare, AiOutlineEnvironment, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterest, BiLogoTwitter, BiLogoYoutube, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const DrawerMobile = ({ onClose, open, openMenu, current, items }) => {
  return (
    <>
      <Drawer
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key='left'
      >
        <div className='border-b-[1px]'>
          <div className='flex justify-between items-center py-4 px-5'>
            <Link to='/'>
              <img className=' w-[130px]' src="https://www.niraagayurveda.com/assets/imgs/theme/logo.svg" alt="" />
            </Link>
            <AiOutlineCloseSquare onClick={onClose} className='flex cursor-pointer text-greenCustom ' size={26} />
          </div>
        </div>
        <div className='px-5 pt-5'>
          <Input
            variant="borderless"
            className='py-3 text-customText bg-custombggray'
            placeholder="Search for items..."
            suffix={<BiSearch className="text-slate-500" size={25} />}
          />
        </div>
        <div className='m-5'>
          <Menu onClick={openMenu}
            selectedKeys={[current]}
            mode="inline" items={items} />
        </div>
        <div className='m-5 border rounded-md p-5 flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <AiOutlineEnvironment className='text-greenCustom' size={16} />
            <p className='text-sm text-customText'>Our location</p>
          </div>
          <div className='flex gap-2 items-center'>
            <AiOutlineUser className='text-greenCustom' size={16} />
            <Link to='/login' className='text-sm text-customText'>Log In</Link>
            <span>/</span>
            <Link to='/signup' className='text-sm text-customText'>Sign Up</Link>
          </div>
          <div className='flex gap-2 items-center'>
            <AiOutlinePhone className='text-greenCustom ' size={16} />
            <p className='text-sm'>(+01)-2345-6789</p>
          </div>
        </div>
        <div className='m-5'>
          <p className='font-medium text-lg'>Follow Us</p>
          <div className='flex gap-4 mt-3'>
            <Link className='bg-customBg rounded-full p-2'><BiLogoFacebook className='text-slate-50 ' size={16} /></Link>
            <Link className='bg-customBg rounded-full p-2'><BiLogoTwitter className='text-slate-50 ' size={16} /></Link>
            <Link className='bg-customBg rounded-full p-2'><BiLogoInstagram className='text-slate-50 ' size={16} /></Link>
            <Link className='bg-customBg rounded-full p-2'><BiLogoPinterest className='text-slate-50 ' size={16} /></Link>
            <Link className='bg-customBg rounded-full p-2'><BiLogoYoutube className='text-slate-50 ' size={16} /></Link>
          </div>
        </div>
        <div className='m-5'>
          <p className='text-custom text-xs leading-loose'>Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.</p>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerMobile