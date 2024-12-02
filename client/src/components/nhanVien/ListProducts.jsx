import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import handleAPI from '../../apis/HandleAPI';

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0, });
  const columns = [
    {
      title: '#',
      dataIndex: 'idSanPham',
      key: 'idSanPham',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'tenSanPham',
      key: 'tenSanPham',
    },
    {
      title: 'Danh mục',
      dataIndex: 'tenDanhMuc',
      key: 'tenDanhMuc',
    }, {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
    }
  ];

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination
    setPagination({
      current,
      pageSize,
      total: pagination.total,
    });
    getProductsByPage(current, pageSize)
  }
  useEffect(() => {
    const { current, pageSize } = pagination
    getProductsByPage(current, pageSize)
  }, [])

  const getProductsByPage = async (page, limit) => {
    setIsLoading(true);
    try {
      const res = await handleAPI(`nhanvien/getallproduct?page=${page}&limit=${limit}`, '', 'get')
      if (res.data) {
        setDataSource(res.data.products);
        setPagination({
          ...pagination,
          current: res.data.page,
          total: res.data.totalProducts
        });
      }
    } catch (e) {
      message.error(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>

        <Table
          loading={isLoading}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: pagination.total,
            showSizeChanger: true,
          }}
          onChange={handleTableChange}
        />
      </div>
    </>
  )
}

export default ListProducts