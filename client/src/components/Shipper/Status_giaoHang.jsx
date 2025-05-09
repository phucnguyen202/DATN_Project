
import React, { useEffect, useState } from 'react';
import { Button, message, Modal, Select, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import DetailOrder from '../DetailOrder';
const { confirm } = Modal
const Status_giaoHang = () => {

  const user = useSelector(state => state?.auth?.currentData?.user);
  const [isLoading, setIsLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState([])
  const [currentOrder, setCurrentOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const columns = [
    {
      title: 'Id đơn hàng',
      dataIndex: 'idDonHang',
      key: 'idDonHang',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'tongTien',
      key: 'tongTien',
      render: (tongTien) => <p>{formatCurrency(tongTien)} VNĐ</p>
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'diaChi',
      key: 'diaChi',
    },
    // {
    //   title: 'Thời gian đặt hàng',
    //   dataIndex: 'thoiGianDatHang',
    //   key: 'thoiGianDatHang',
    //   render: (thoiGianDatHang) => <p>{dayjs(thoiGianDatHang).format('DD/MM/YYYY HH:mm:ss')}</p>
    // },
    // {
    //   title: 'Trạng thái',
    //   dataIndex: 'trangThai',
    //   key: 'trangThai',
    //   render: (trangThai) =>
    //     <Tag color='blue'> {trangThai}</Tag>
    //   ,
    // },
    // {
    //   title: 'Thanh toán',
    //   dataIndex: 'thanhToan',
    //   key: 'thanhToan',
    //   render: (thanhToan) => <Tag color={thanhToan === 'Chưa thanh toán' ? 'red' : 'green'}>{thanhToan}</Tag>
    // },
    {
      title: 'Trạng thái giao hàng',
      dataIndex: 'trangThaiGiaoHang',
      key: 'trangThaiGiaoHang',
      render: (trangThaiGiaoHang, record) => (
        <Select
          defaultValue={trangThaiGiaoHang}
          style={{ width: 160 }}
          onChange={(value) => handleUpdateStatus(record.idDonHang, value)}
          options={[
            { value: 'Đang giao', label: 'Đang giao' },
            { value: 'Đã giao', label: 'Đã giao' },
          ]}
        />
      ),
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
              setIsModalOpen(true)
              setCurrentOrder(item?.idDonHang)
            }}
            icon={<FiMoreHorizontal size={20}
              className="text-slate-600" />}
          >
          </Button>
          <Button
            onClick={() => confirm({
              title: 'Hủy đơn hàng',
              content: 'Bạn có muốn hủy đơn hàng không?',
              onOk: () => handleCancelOrder(item.idDonHang),
              onCancel() { },
            })}
            style={{
              backgroundColor: '#3BB77E',
              color: 'white',
            }}
          > Hủy hàng</Button>
        </Space >
    }
  ];

  useEffect(() => {
    getInfoOrder();
  }, []);

  const getInfoOrder = async () => {
    try {
      const res = await handleAPI('/shipper/get-undelivered-orders ', '', 'get')
      if (res.success) {
        setOrderInfo(res.data)
      }
    } catch (e) {
      console.error(e)
    }
  }
  const handleUpdateStatus = async (idDonHang, newStatus) => {
    try {
      setIsLoading(true);
      const data = {
        trangThaiGiaoHang: newStatus,
        idDonHang: idDonHang,
      }
      console.log(data)
      const res = await handleAPI('/shipper/update-delivery-status', data, 'put');
      if (res.success) {
        message.success(res.message);
        getInfoOrder();// Refresh data
      } else {
        message.error(res.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Table
        title={() => (
          <div className="flex justify-between">
            <div>
              <Title level={3}>Lịch sử bán hàng</Title>
            </div>
          </div>
        )}
        loading={isLoading}
        dataSource={orderInfo}
        columns={columns} />
      <DetailOrder
        currentOrder={currentOrder}
        onClose={() => {
          setIsModalOpen(false)
        }}
        isVisible={isModalOpen}
      />
    </>
  )
}

export default Status_giaoHang