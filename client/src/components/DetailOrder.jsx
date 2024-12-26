import { Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import handleAPI from '../apis/HandleAPI';

const DetailOrder = ({ isVisible, onClose, currentOrder }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  console.log('currentOrder:::', currentOrder);

  useEffect(() => {
    if (currentOrder) {
      getDetailOrder();
    }
  }, [currentOrder])

  const getDetailOrder = async () => {
    try {
      const res = await handleAPI(`/khachhang/getDetailOrders?idDonHang=${currentOrder}`)
      // console.log('res:::', res)
      setOrderDetails(res?.data)
    } catch (e) {
      console.log(e)
    }
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'idChiTietDonHang',
      key: 'idChiTietDonHang',
    },
    {
      title: 'ID đơn hàng',
      dataIndex: 'donHangId',
      key: 'donHangId',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'tenSanPham',
      key: 'tenSanPham',
    },
    {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
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
  ];
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Modal
        // closable={!isLoading}
        open={isVisible}
        onClose={handleClose}
        onCancel={handleClose}
        title='Chi tiết đơn hàng'
        width={1000}
      >
        <Table
          loading={isLoading}
          dataSource={orderDetails}
          columns={columns} />
      </Modal>
    </>
  )
}

export default DetailOrder