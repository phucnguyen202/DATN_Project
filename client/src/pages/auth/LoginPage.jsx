import React, { useState } from 'react'
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd'
import SocialLogin from './components/SocialLogin';

const LoginPage = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isRemember, setIsRemember] = useState(false)
  const handleLogin = (val) => {
    console.log("val::", val)
  }
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-meium self-center text-xl sm:text-2xl uppercase text-gray-800">Đăng nhập tài khoản</div>
          <SocialLogin />
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">Hoặc đăng nhập bằng Google</span>
            </div>
          </div>
          <div className="mt-10">
            <Form
              disabled={isLoading}
              onFinish={handleLogin}
              size='large'
              form={form}
              layout='vertical'
            >
              <Form.Item
                name='email'
                label='Địa chỉ Email'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập email!',
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                ]}
              >
                <Input placeholder='VD: NguyenVanA@gmail.com' allowClear maxLength={100} type='email' />
              </Form.Item>
              <Form.Item
                name='password'
                label='Mật khẩu'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập password!',
                  },
                ]}
              >
                <Input.Password placeholder='Nhập mật khẩu' maxLength={100} type='password' />
              </Form.Item>
            </Form>
            <div className="flex justify-between">
              <Checkbox
                checked={isRemember}
                onChange={(e) => setIsRemember(e.target.checked)}
              >Remember for 30 days</Checkbox>
              <Link to='/' className='text-blue-600 '>Forgot password?</Link>
            </div>
            <div className='my-5'>
              <Button
                loading={isLoading}
                onClick={() => form.submit()}
                className=' from-slate-800 bg-gradient-to-r to-slate-400 text-gray-50'
                style={{ width: '100%' }}
                size='large'
              >Đăng nhập</Button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link to={'/signup'} className="inline-flex items-center font-bold text-slate-500 hover:text-slate-700 text-xs text-center">
              <IoMdPersonAdd size={20} />
              <span className="ml-2">Bạn chưa có tài khoản?</span>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default LoginPage
