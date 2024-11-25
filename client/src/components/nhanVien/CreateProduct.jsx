import { Button, Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import { HiOutlinePlus } from "react-icons/hi";
const CreateProduct = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (value) => {
    console.log(value)
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h2>
        <Form
          disabled={isLoading}
          onFinish={handleSubmit}
          size='large'
          form={form}
          layout='vertical'
        >
          <Form.Item
            name='tenSanPham'
            label={<p className="block text-gray-700 font-medium mb-2">Tên sản phẩm</p>}
          >
            <Input placeholder='Nhập tên sản phẩm' allowClear maxLength={100} />
          </Form.Item>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Form.Item
                name='moTa'
                label={<p className="block text-gray-700 font-medium mb-2">Mô tả sản phẩm</p>}
              >
                <TextArea rows={4} placeholder='Nhập mô tả sản phẩm' />
              </Form.Item>
            </div>
            <div className='w-1/2'>
              <Form.Item
                name='dongGoiGiaoHang'
                label={<p className="block text-gray-700 font-medium mb-2">Đóng gói & Giao hàng</p>}
              >
                <TextArea rows={4} placeholder='Nhập Đóng gói & Giao hàng' />
              </Form.Item>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Form.Item
                name='cachSuDung'
                label={<p className="block text-gray-700 font-medium mb-2">Đề xuất sử dụng</p>}
              >
                <TextArea rows={4} placeholder='Nhập đề xuất sử dụng' />
              </Form.Item>
            </div>
            <div className='w-1/2'>
              <Form.Item
                name='canhBao'
                label={<p className="block text-gray-700 font-medium mb-2">Nhập cảnh báo</p>}
              >
                <TextArea rows={4} placeholder='Nhập cảnh báo' />
              </Form.Item>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Form.Item
                name='tenDanhMuc'
                label={<p className="block text-gray-700 font-medium mb-2">Danh mục sản phẩm</p>}
              >
                <Select
                  placeholder='Chọn danh mục sản phẩm'
                >
                  <Select.Option value="demo1">Demo</Select.Option>
                  <Select.Option value="demo2">Demo</Select.Option>
                  <Select.Option value="demo3">Demo</Select.Option>
                  <Select.Option value="demo4">Demo</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className='w-1/2'>
              <Form.Item
                name='gia'
                label={<p className="block text-gray-700 font-medium mb-2">Giá sản phẩm</p>}
              >
                <Input placeholder='Nhập giá sản phẩm' allowClear maxLength={100} />
              </Form.Item>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <Form.Item
                name='hinhAnh'
                label={<p className="block text-gray-700 font-medium mb-2">Hình ảnh 1</p>}
              >
                <Input type='file' />
              </Form.Item>

            </div>
            <div className='w-1/2'>
              <Form.Item
                name='hinhAnh'
                label={<p className="block text-gray-700 font-medium mb-2">Hình ảnh 2</p>}
              >
                <Input type='file' />
              </Form.Item>

            </div>
          </div>

          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            style={{
              backgroundColor: '#3BB77E',
              color: 'white',
              width: '100%',
              fontWeight: 500,
            }}
            size='large'
          >Thêm sản phẩm</Button>
        </Form>
      </div >
    </>
  )
}

export default CreateProduct