import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import handleAPI from '../../apis/HandleAPI';

const RegisterSupplierPage = () => {
  const [form] = Form.useForm();
  const [formSupplier, setFormSupplier] = useState(false);
  const onFinish = async (values) => {
    try {
      const res = await handleAPI(`/khachhang/register/supplier`, values, 'post')
      if (res.success) {
        message.success(res.message);
        form.resetFields();
        return;
      } else {
        message.error(res.message);
        return;
      }
    } catch (e) {
      console.error(e);
      message.error('Có lỗi xảy ra, vui lòng thử lại sau');
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-customText">Đăng ký nhà cung cấp</h2>
            <p className="mt-2 text-gray-600">Vui lòng điền đầy đủ thông tin bên dưới</p>
          </div>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              name="tenNhaCungCap"
              label="Tên nhà cung cấp"
              rules={[{ required: true, message: 'Vui lòng nhập tên nhà cung cấp!' }]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Nhập tên nhà cung cấp"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="diaChi"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
            >
              <Input.TextArea
                prefix={<HomeOutlined className="text-gray-400" />}
                placeholder="Nhập địa chỉ"
                className="rounded-lg"
                rows={3}
              />
            </Form.Item>

            <Form.Item
              name="soDienThoai"
              label="Số điện thoại"
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                { pattern: /^[0-9]{10}$/, message: 'Số điện thoại không hợp lệ!' }
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="text-gray-400" />}
                placeholder="Nhập số điện thoại"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: '#3BB77E'
                }}
                className=" w-full rounded-lg h-10 text-lg"
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>


      {/* <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-customText">Đăng ký nhà cung cấp</h2>
          <p className="mt-2 text-gray-600">Yêu cầu của bạn đã được gửi, Vui lòng đợi phản hồi</p>
        </div>
      </div> */}

    </>
  )
}

export default RegisterSupplierPage