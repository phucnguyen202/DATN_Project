
import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Input, Upload, message, Tag } from 'antd';
import { FaUser, FaPhone } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { AiOutlineUpload } from 'react-icons/ai';
import uploadFile from '../configs/Cloudinary';
import handleAPI from '../apis/HandleAPI';
import { updateUser } from '../redux/reducers/authReducer';
import { useDispatch } from 'react-redux';

const Info = ({ user }) => {
  // console.log('user:::', user)
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(user?.hinhAnh);
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (user) {
  //     form.setFieldsValue({
  //       ten: user.ten,
  //       soDT: user.soDT,
  //     });
  //   }
  // }, [user, form])

  const handleSubmit = async (values) => {
    try {
      const data = {
        ten: values.ten,
        soDT: values.soDT,
        hinhAnh: imageUrl || user.hinhAnh
      }
      const res = await handleAPI(`/auth/updateinfo?idUser=${user.idNguoiDung}`, data, 'post')
      if (res.success) {
        getUserById();
        message.success(res.message);
        setIsEditing(false);
      }
    } catch (err) {
      console.error(err)
    }
  };

  const getUserById = async () => {
    try {
      const res = await handleAPI(`/auth/finduserbyid?idUser=${user?.idNguoiDung}`, '', 'get');
      if (res.success) {
        dispatch(updateUser(res.data));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleImageUpload = async (info) => {
    if (info.file.status !== 'uploading') {
      const file = info.file.originFileObj || info.file;
      if (!file) {
        message.error('Không thể tìm thấy file ảnh.');
        return;
      }
      try {
        const response = await uploadFile(file);
        if (response.secure_url) {
          setImageUrl(response.secure_url);
          message.success('Upload hình ảnh thành công!');
        } else {
          message.error('Không nhận được link ảnh từ Cloudinary.');
        }
      } catch (error) {
        message.error('Có lỗi khi tải lên Cloudinary.');
      }
    }
  };

  return (
    <div className="p-6">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Phần ảnh đại diện */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={imageUrl || user?.hinhAnh}
                alt="Avatar"
                className="w-40 h-40 rounded-full object-cover"
              />
              <Upload
                onChange={handleImageUpload}
                showUploadList={false}
                className="absolute bottom-0 right-0"
              >
                <Button
                  icon={<AiOutlineUpload />}
                  className="rounded-full"
                  type="primary"
                />
              </Upload>
            </div>
            <div className="">
              {user?.quyen === 'nhanvien' ?
                <Tag color="green">Khách hàng</Tag> : user?.quyen === 'nhacungcap' ?
                  <Tag color="cyan">Nhà cung cấp</Tag> : <Tag color="blue">Chủ cửa hàng</Tag>
              }
            </div>
          </div>

          {/* Phần thông tin */}
          <div className="flex-1">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            // initialValues={{
            //   ten: user?.ten,
            //   soDT: user?.soDT,
            // }}
            >
              <div className="space-y-4">
                <Form.Item name="ten" label="Họ và tên">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-gray-400" size={20} />
                    {isEditing ? (
                      <Input placeholder='Nhập tên' />
                    ) : (
                      <span className="text-lg">{user?.ten}</span>
                    )}
                  </div>
                </Form.Item>
                <Form.Item name="soDT" label="Số điện thoại">
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-gray-400" size={20} />
                    {isEditing ? (
                      <Input placeholder='Nhập số điện thoại' />
                    ) : (
                      <span className="text-lg">{user?.soDT || 'Số điện thoại rỗng'}</span>
                    )}
                  </div>
                </Form.Item>
              </div>
              <div className="mt-6 flex justify-end">
                {isEditing ? (
                  <div className="space-x-2">
                    <Button onClick={() => setIsEditing(false)}>
                      Hủy
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Lưu
                    </Button>
                  </div>
                ) : (
                  <Button
                    icon={<MdModeEdit />}
                    onClick={() => setIsEditing(true)}
                  >
                    Chỉnh sửa
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Info