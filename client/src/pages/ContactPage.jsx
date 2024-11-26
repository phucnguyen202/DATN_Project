import { Breadcrumb, Button, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import PromotionalSectionHome from '../components/Home/PromotionalSectionHome'
import TextArea from 'antd/es/input/TextArea'

const ContactPage = () => {

  const [form] = Form.useForm()

  const handleSendContact = async (value) => {
    console.log(value)
  }
  return (
    <>
      <div className='border-b-[1px]'>
        <div className='px-4 py-5'>
          <Breadcrumb
            items={[
              {
                title: <p className='font-medium'>Trang chủ</p>,
              },
              {
                title: <Link className='font-medium text-greenCustom' to={'/about'}>Liên hệ</Link>,
              }
            ]}
          />
        </div>
      </div>
      <div className='px-4 xl:px-32 py-14'>
        <div className="">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-7xl font-bold text-customText">Liên hệ với Nest Food</h1>
            <p className="text-lg text-custom mt-2">
              Mang đến sự hài lòng và đồng hành cùng bạn trong từng trải nghiệm mua sắm.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-1 '>
              <h2 className="text-2xl text-customText font-semibold">Thông tin liên hệ</h2>
              <ul className="text-customText mt-2 flex flex-col gap-4">
                <li><strong>Địa chỉ:</strong>48 Cao Thắng, Thanh Bình, Hải Châu, Đà Nẵng, Việt Nam </li>
                <li><strong>Điện thoại:</strong> 0987 654 321</li>
                <li><strong>Email:</strong> support@nestfood.vn</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h3 className="text-xl text-customText font-semibold">Mạng xã hội:</h3>
              <ul className="flex gap-4 mt-2">
                <li>
                  <a href="#"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="text-green-600 hover:underline"
                  >
                    Zalo
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="text-pink-600 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h3 className="text-xl text-customText font-semibold">Giờ làm việc:</h3>
              <ul className="text-customText flex flex-col gap-2 mt-2">
                <li>Thứ Hai - Thứ Bảy: 8:00 - 18:00</li>
                <li>Chủ Nhật: Nghỉ</li>
              </ul>
            </div>
          </div>
          <div className='mt-14'>
            <h2 className="text-4xl text-customText text-center font-bold mb-6">Vị trí của chúng tôi</h2>
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.3716592576648!2d108.2110592746001!3d16.076877239234133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421847f0d1243f%3A0xfe9e3527761db501!2zNDggQ2FvIFRo4bqvbmcsIFRoYW5oIELDrG5oLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1732636542136!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Nest Food">
              </iframe>
            </div>
          </div>
          <div className='mt-14'>
            <h2 className="text-4xl text-customText text-center font-bold mb-6">Gửi thông tin liên hệ</h2>
            <Form
              className="bg-white shadow-md rounded-lg p-6 space-y-4"
              // disabled={isLoading}
              onFinish={handleSendContact}
              size='large'
              form={form}
              layout='vertical'
            >
              <Form.Item
                name='name'
                label='Họ và Tên'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên!',
                  },
                ]}
              >
                <Input placeholder='VD: Nguyen Van A' allowClear maxLength={100} type='name' />
              </Form.Item>
              <Form.Item
                name='phone'
                label='Số điện thoại'
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại'
                  }]}>
                <Input placeholder='123456789' allowClear maxLength={100} type='number' />
              </Form.Item>
              <Form.Item
                name='email'
                label='Địa chỉ Email'
                rules={[
                  {
                    required: true,
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Vui lòng nhập email!',
                  },
                ]}
              >
                <Input placeholder='VD: NguyenVanA@gmail.com' allowClear maxLength={100} type='email' />
              </Form.Item>
              <Form.Item
                name='noidung'
                label='Nội dung'
              >
                <TextArea cols={6} placeholder='Nhập nội dung' />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => form.submit()}
                  className='w-full bg-customBg text-white font-semibold'
                // loading={isLoading}
                >
                  Gửi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <PromotionalSectionHome />
    </>
  )
}

export default ContactPage