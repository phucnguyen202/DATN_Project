import { Table, Tag, Select, message } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react'
import handleAPI from '../../apis/HandleAPI';

const ListAccountSupplier = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    getAllAccountSuppliers()
  }, [])

  const getAllAccountSuppliers = async () => {
    try {
      const res = await handleAPI('/seller/getAllAccountSupplier', '', 'get')
      console.log(res)
      if (res.success) {
        setDataSource(res.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateStatus = async (id, nguoiDungId, newStatus) => {
    try {
      const data = {
        idNhaCungCap: id,
        trangThai: newStatus,
        nguoiDungId: nguoiDungId
      }
      setIsLoading(true);
      const res = await handleAPI('/seller/updateSupplierStatus', data, 'put');
      if (res.success) {
        message.success('Cập nhật trạng thái thành công');
        getAllAccountSuppliers(); // Refresh data
      } else {
        message.error('Cập nhật trạng thái thất bại');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };


  const columns = [
    {
      title: 'ID nhà cung cấp',
      dataIndex: 'idNhaCungCap',
      key: 'idNhaCungCap',
    },
    {
      title: 'Tên nhà cung cấp',
      dataIndex: 'tenNhaCungCap',
      key: 'tenNhaCungCap',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDienThoai',
      key: 'soDienThoai',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
      key: 'diaChi',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai, record) => (
        <Select
          defaultValue={trangThai}
          style={{ width: 160 }}
          onChange={(value) => handleUpdateStatus(record.idNhaCungCap, record.nguoiDungId, value)}
          options={[
            { value: 'Đã phê duyệt', label: 'Đã phê duyệt' },
            { value: 'Đã từ chối', label: 'Đã từ chối' },
          ]}
        />
      ),
    },
  ];
  return (
    <>
      <Table
        title={() => (
          <div className="flex justify-between">
            <div>
              <Title level={3}>Danh sách tài khoản</Title>
            </div>
          </div>
        )}
        loading={isLoading}
        dataSource={dataSource}
        columns={columns} />
    </>
  )
}

export default ListAccountSupplier