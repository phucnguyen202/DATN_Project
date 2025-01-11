import { Button, message, Modal, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
const { confirm } = Modal

const ListProducts_Supplier = () => {
  const user = useSelector(state => state?.auth?.currentData?.user);
  const [isLoading, setIsLoading] = useState(false);
  const [productSupplier, setProductSupplier] = useState([])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'idSanPhamNCC',
      key: 'idSanPhamNCC',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'tenSanPhamNCC',
      key: 'tenSanPhamNCC',
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',
    },
    {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
    },
    {
      title: 'Danh mục sản phẩm',
      dataIndex: 'tenDanhMuc',
      key: 'tenDanhMuc',
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
            // onClick={() => {
            //   setProductSelected(item)
            //   setIsVisibleModalEdit(true)
            // }}
            icon={<CiEdit size={20}
              className="text-slate-600" />}>
          </Button>

          <Button
            // onClick={() => confirm({
            //   title: 'Xóa sản phẩm',
            //   content: 'Bạn có muốn xóa sản phẩm không?',
            //   onOk: () => handleDeleteProduct(item?.idSanPham),
            //   onCancel() { },
            // })}
            type="text"
            icon={<CiSquareRemove size={20}
              className="text-slate-600" />}></Button>
        </Space >
    }
  ];

  useEffect(() => {
    getAllProductSupplier();
  }, []);

  const getAllProductSupplier = async () => {
    setIsLoading(true)
    try {
      const res = await handleAPI('/supplier/get-all-product-supplier', '', 'get')
      console.log(res)
      if (res.success) {
        setProductSupplier(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <Table
        title={() => (
          <div className="flex justify-between">
            <div>
              <Title level={3}>Danh sách yêu cầu nhập hàng</Title>
            </div>
          </div>
        )}
        loading={isLoading}
        dataSource={productSupplier}
        columns={columns} />
    </>
  )
}

export default ListProducts_Supplier