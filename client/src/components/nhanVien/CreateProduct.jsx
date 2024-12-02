import { Button, Form, Input, message, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import handleAPI from '../../apis/HandleAPI';
import uploadFile from '../../configs/Cloudinary';
const CreateProduct = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [dataCategory, setDataCategory] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [imageUrls, setImageUrls] = useState({ image1: '', image2: '' });

  //category
  useEffect(() => {
    const getAllCategory = async () => {
      setIsLoading(true);
      try {
        const res = await handleAPI('/getAlldanhmuc', '', 'get');
        if (res.data) {
          setDataCategory(res.data.result);
        }
      } catch (e) {
        message.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategory();
  }, []);

  const handleUploadChange = async (info, setFileList, imageKey) => {
    let fileList = info.fileList.slice(-1); // Giữ lại file mới nhất
    setFileList(fileList);
    if (info.file.status !== 'uploading') {
      const file = info.file.originFileObj || info.file;
      if (!file) {
        message.error('Không thể tìm thấy file ảnh.');
        return;
      }
      try {
        const response = await uploadFile(file); // Gọi hàm upload lên Cloudinary
        if (response.secure_url) {
          setImageUrls((prevState) => ({
            ...prevState,
            [imageKey]: response.secure_url,
          }));
          message.success('Upload hình ảnh thành công!');
        } else {
          message.error('Không nhận được link ảnh từ Cloudinary.');
        }
      } catch (error) {
        message.error('Có lỗi khi tải lên Cloudinary.');
      }
    }
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const productData = {
        tenSanPham: values.tenSanPham,
        gia: values.gia,
        moTa: values.moTa,
        dongGoiGiaoHang: values.dongGoiGiaoHang,
        deXuat: values.deXuat,
        canhBao: values.canhBao,
        danhMucId: values.danhMucId,
        hinhAnh: [imageUrls.image1 || '', imageUrls.image2 || ''],
      };
      const res = await handleAPI('/nhanvien/createProduct', productData, 'post');
      if (res) {
        message.success(res.message);
        form.resetFields();
        setFileList1([]);
        setFileList2([]);
      }
    } catch (e) {
      message.error(e.message || 'Có lỗi xảy ra khi tạo sản phẩm');
    } finally {
      setIsLoading(false);
    }
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
                name='deXuat'
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
                name='danhMucId'
                label={<p className="block text-gray-700 font-medium mb-2">Danh mục sản phẩm</p>}
              >
                <Select
                  placeholder='Chọn danh mục sản phẩm'
                >
                  {
                    dataCategory && dataCategory.map((item, index) => (
                      <Select.Option key={index} value={item.idDanhMuc}>{item.tenDanhMuc}</Select.Option>
                    ))
                  }
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
                name='hinhAnh1'
                label={<p className="block text-gray-700 font-medium mb-2">Hình ảnh 1</p>}
                rules={[{ required: true, message: 'Vui lòng chọn hình ảnh!' }]}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList1}
                  onChange={(info) => handleUploadChange(info, setFileList1, 'image1')}
                  beforeUpload={(file) => {
                    const isImage = file.type.startsWith('image/');
                    if (!isImage) {
                      message.error('Chỉ được upload file ảnh!');
                      return false;
                    }
                    return false;
                  }}
                  maxCount={1}
                >
                  {fileList1.length < 1 && (
                    <div>
                      <HiOutlinePlus />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>
            </div>
            <div className='w-1/2'>
              <Form.Item
                name='hinhAnh2'
                label={<p className="block text-gray-700 font-medium mb-2">Hình ảnh 2</p>}
                rules={[{ required: true, message: 'Vui lòng chọn hình ảnh!' }]}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList2}
                  onChange={(info) => handleUploadChange(info, setFileList2, 'image2')}
                  beforeUpload={(file) => {
                    const isImage = file.type.startsWith('image/');
                    if (!isImage) {
                      message.error('Chỉ được upload file ảnh!');
                      return false;
                    }
                    return false;
                  }}
                  maxCount={1}
                >
                  {fileList2.length < 1 && (
                    <div>
                      <HiOutlinePlus />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
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