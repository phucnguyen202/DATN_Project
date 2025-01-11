import { Button, Form, Input, message, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import handleAPI from '../../apis/HandleAPI';
import uploadFile from '../../configs/Cloudinary';
import { useSelector } from 'react-redux';

const Create_product_Supplier = () => {
  const [form] = Form.useForm()
  const user = useSelector(state => state?.auth?.currentData?.user);
  const [isLoading, setIsLoading] = useState(false);
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
        tenSanPhamNCC: values.tenSanPham,
        gia: values.gia,
        moTa: values.moTa,
        danhMucId: values.danhMucId,
        soLuong: values.soLuong,
        hinhAnh: [imageUrls.image1 || '', imageUrls.image2 || ''].join(','),
        nguoiDungId: user.idNguoiDung
      };
      const res = await handleAPI('/supplier/create-product-supplier', productData, 'post');
      if (res && res.success) {
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
          <Form.Item
            name='moTa'
            label={<p className="block text-gray-700 font-medium mb-2">Mô tả sản phẩm</p>}
          >
            <TextArea rows={4} placeholder='Nhập mô tả sản phẩm' />
          </Form.Item>

          <div className='flex gap-4'>
            <div className='w-1/3'>
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
            <div className='w-1/3'>
              <Form.Item
                name='gia'
                label={<p className="block text-gray-700 font-medium mb-2">Giá sản phẩm</p>}
              >
                <Input placeholder='Nhập giá sản phẩm' allowClear maxLength={100} />
              </Form.Item>
            </div>
            <div className='w-1/3'>
              <Form.Item
                name='soLuong'
                label={<p className="block text-gray-700 font-medium mb-2">Số lượng</p>}
              >
                <Input placeholder='Nhập số lượng tôn kho' allowClear maxLength={100} />
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

export default Create_product_Supplier