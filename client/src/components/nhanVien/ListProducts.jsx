import { Button, message, Modal, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import handleAPI from '../../apis/HandleAPI';
import { CiEdit, CiSquareRemove } from 'react-icons/ci'
import { BsFilterSquare } from 'react-icons/bs'
import Title from 'antd/es/typography/Title';
import ModalEditProduct from './ModalEditProduct';
const { confirm } = Modal
const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0, });
  const [productSelected, setProductSelected] = useState(null)
  const [isVisibleModalEdit, setIsVisibleModalEdit] = useState(false);

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
    },
    {
      title: 'Số lượng tôn kho',
      dataIndex: 'tonKho',
      key: 'tonKho',
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
              setProductSelected(item)
              setIsVisibleModalEdit(true)
            }}
            icon={<CiEdit size={20}
              className="text-slate-600" />}>
          </Button>

          <Button
            onClick={() => confirm({
              title: 'Xóa sản phẩm',
              content: 'Bạn có muốn xóa sản phẩm không?',
              onOk: () => handleDeleteProduct(item?.idSanPham),
              onCancel() { },
            })}
            type="text"
            icon={<CiSquareRemove size={20}
              className="text-slate-600" />}></Button>
        </Space >
    }
  ];
  useEffect(() => {
    const { current, pageSize } = pagination
    getProductsByPage(current, pageSize)
  }, [])

  const handleTableChange = (pagination) => {
    const { current, pageSize } = pagination
    setPagination({
      current,
      pageSize,
      total: pagination.total,
    });
    getProductsByPage(current, pageSize)
  }

  const getProductsByPage = async (page, limit) => {
    setIsLoading(true);
    try {
      const res = await handleAPI(`/nhanvien/getproduct?page=${page}&limit=${limit}`, '', 'get')
      console.log('resres:::', res)
      if (res && res.success) {
        setDataSource(res.data.products);
        setPagination({
          ...pagination,
          current: res.data.page,
          total: res.data.totalProducts
        });
      }
    } catch (e) {
      message.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeleteProduct = async (id) => {
    setIsLoading(true);
    try {
      const res = await handleAPI(`/nhanvien/deleteproduct?id=${id}`, '', 'delete')
      if (res && res.success) {
        message.success(res.message);
        getProductsByPage(pagination.current, pagination.pageSize);
      } else {
        message.error('Xóa sản phẩm thất bại!');
      }
    } catch (e) {
      message.error(e.message);
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div>
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
          title={() => (
            <div className="flex justify-between">
              <div>
                <Title level={3}>Danh sách sản phẩm</Title>
              </div>
              <div className="flex gap-2">
                <Button className=" font-medium" icon={<BsFilterSquare size={20} />}>Filters</Button>
                <Button className=" font-medium" >Download all</Button>
              </div>
            </div>
          )}
        />

        <ModalEditProduct
          productSelected={productSelected}
          getProductsByPage={getProductsByPage}
          onClose={() => {
            setProductSelected(null)
            setIsVisibleModalEdit(false)
          }}
          isVisible={isVisibleModalEdit}
        />
      </div>
    </>
  )
}

export default ListProducts