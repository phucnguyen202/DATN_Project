import { Button, message, Space, Statistic, Table, Tag } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
import handleAPI from '../../apis/HandleAPI';
import ToogleAccountUser from './ToogleAccountUser';
import { IoArrowUpOutline } from "react-icons/io5";

const AccountUser = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Tag color="cyan">Nhà cung cấp</Tag> : quyen === 'admin' ? <Tag color="red">Admin</Tag> : <Tag color="blue">Chủ cửa hàng</Tag>
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
          <Button type="text"
            onClick={() => {
              setIsModalOpen(true);
            }}
            icon={<CiEdit size={20}
              className="text-slate-600" />}></Button>
          <Button
            onClick={() => confirm({
              title: 'Xóa nhà cung cấp',
              content: 'Bạn có muốn xóa nhà cung cấp không?',
              // onOk: () => handleDeleteSupplier(item._id),
              // onCancel() { },
            })}
            type="text"
            icon={<CiSquareRemove size={20}
              className="text-slate-600" />}></Button>
        </Space >
    }
  ];

  useEffect(() => {
    getAllAccount();
  }, []);

  const getAllAccount = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/admin/user', '', 'get')
      res.data && setDataSource(res?.data?.result)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <div>
        <div className='grid grid-cols-3 mb-4 gap-4'>
          <div className='border-[1px] p-5 rounded-lg col-span-1'>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<IoArrowUpOutline />}
              suffix="%"
            />
          </div>
          <div className='border-[1px] p-5 rounded-lg col-span-1'>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<IoArrowUpOutline />}
              suffix="%"
            />
          </div>
          <div className='border-[1px] p-5 rounded-lg col-span-1'>
            <Statistic
              title="Active"
              value={11.28}
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
        {/* <ToogleAccountUser
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      /> */}
      </div>
    </>
  )
}

export default AccountUser