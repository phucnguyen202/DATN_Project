import { Button, message, Modal, Select, Space, Statistic, Table, Tag, Typography } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
import handleAPI from '../../apis/HandleAPI';
import { IoArrowUpOutline } from "react-icons/io5";
const { confirm } = Modal
const Account = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editQuyen, setEditQuyen] = useState(null);
  const [selectedQuyen, setSelectedQuyen] = useState('');
  // ngan ham getAllAccount chay lai 2 lan
  const isInitialRender = useRef(true);
  const columns = [
    {
      title: '#',
      dataIndex: 'idNguoiDung',
      key: 'idNguoiDung',
    },
    {
      title: 'Tên',
      dataIndex: 'ten',
      key: 'ten',
    },
    {
      title: 'Địa chỉ Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Quyền',
      dataIndex: 'quyen',
      key: 'quyen',
      render: (quyen) =>
        quyen === 'khachhang' ?
          <Tag color="green">Khách hàng</Tag> : quyen === 'nhacungcap' ?
            <Tag color="cyan">Nhà cung cấp</Tag> : quyen === 'admin' ?
              <Tag color="red">Admin</Tag> : quyen === 'nhanvien' ?
                <Tag color="gold">Nhân viên</Tag> : quyen === 'giaohang' ?
                  <Tag color="purple">Giao hàng</Tag> : <Tag color="blue">Chủ cửa hàng</Tag>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai) =>
        trangThai === 'hoatdong' ?
          <Tag color="#108ee9">Hoạt động</Tag>
          :
          <Tag color="#f50">Bị Cấm</Tag>
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDT',
      key: 'soDT',
    },
    {
      key: 'buttonContainer',
      align: 'right',
      title: 'Actions',
      width: 100,
      dataIndex: '',
      render: (item) =>
        <Space>
          {
            (item.quyen != 'admin' && item.quyen != 'banhang') && (
              <>
                <Button type="text"
                  onClick={() => {
                    showModal()
                    setEditQuyen(item);
                  }}
                  icon={<CiEdit size={20}
                    className="text-slate-600" />}></Button>
                <Button
                  onClick={() => confirm({
                    title: 'Cấm người dùng',
                    content: 'Bạn có muốn cấm người dùng này không?',
                    onOk: () => handleUpdateTrangThaiTaiKhoan(item.idNguoiDung),
                    onCancel() { },
                  })}
                  type="text"
                  icon={<CiSquareRemove size={20}
                    className="text-slate-600" />}></Button>
              </>
            )
          }
        </Space >
    }
  ];

  useEffect(() => {
    getAllAccount();
  }, []);

  const getAllAccount = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/get-all-user', '', 'get')
      if (res.success) {
        setDataSource(res.data)
      }
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  // xóa người dùng
  // const handleDeleteUser = async (id) => {
  //   try {
  //     // admin không được xóa
  //     const data = {
  //       idNguoiDung: id,
  //       quyen: 'admin'
  //     }
  //     const res = await handleAPI(`/seller/delete-user`, data, 'delete');
  //     if (res.success) {
  //       message.success('Xóa thành công')
  //       getAllAccount()
  //     }
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }

  // update trạng thái tài khoản
  const handleUpdateTrangThaiTaiKhoan = async (id) => {
    try {
      // admin không được xóa
      const data = {
        idNguoiDung: id,
      }
      const res = await handleAPI(`/seller/update-trangthai`, data, 'put');
      if (res.success) {
        message.success(res.message);
        getAllAccount()
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  const showModal = () => { setIsModalOpen(true) };

  const handleOk = async () => {
    try {
      const data = {
        idNguoiDung: editQuyen.idNguoiDung,
        quyen: selectedQuyen,
      }
      const res = await handleAPI(`/seller/update-status-quyen`, data, 'put')
      if (res.success) {
        message.success('Cập nhật thành công')
        setIsModalOpen(false);
        getAllAccount()
      }
    } catch (err) {
      console.error(err)
    }
  };

  const handleCancel = () => { setIsModalOpen(false) }
  return (
    <>
      <div>
        <div className='grid grid-cols-3 mb-4 gap-4'>
          <div className='border-[1px] p-5 rounded-lg col-span-1'>
            <Statistic
              title="Nguời dùng"
              value={dataSource.length}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<IoArrowUpOutline />}
              suffix="%"
            />
          </div>
        </div>
        <Table
          loading={isLoading}
          dataSource={dataSource}
          columns={columns} />
        <Modal
          title="Cập quyền người dùng"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Select
            value={selectedQuyen}
            className='w-full'
            placeholder='Chọn quyền'
            onChange={(value) => setSelectedQuyen(value)}
          >
            <Select.Option value='nhanvien'>Nhân viên</Select.Option>
            <Select.Option value='giaohang'>Nhân viên giao hàng</Select.Option>
          </Select>
        </Modal>
      </div>
    </>
  )
}

export default Account