
import React, { useEffect, useState } from 'react';
import { Button, message, Modal, Select, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
import DetailOrder from '../DetailOrder';
import { BsFilterSquare } from 'react-icons/bs';
const { confirm } = Modal
const Order_Nhanvien = () => {

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
    {
      title: 'Thời gian đặt hàng',
      dataIndex: 'thoiGianDatHang',
      key: 'thoiGianDatHang',
      render: (thoiGianDatHang) => <p>{dayjs(thoiGianDatHang).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai, record) => (
        <Select
          defaultValue={trangThai}
          style={{ width: 160 }}
          onChange={(value) => handleUpdateStatus(record.idDonHang, value)}
          options={[
            { value: 'Đã xác nhận', label: 'Đã xác nhận' },
            { value: 'Đã từ chối', label: 'Đã từ chối' },
          ]}
        />
      ),
    },
    {
      title: 'Thanh toán',
      dataIndex: 'thanhToan',
      key: 'thanhToan',
      render: (thanhToan) => <Tag color={thanhToan === 'Chưa thanh toán' ? 'red' : 'green'}>{thanhToan}</Tag>
    },
    {
      title: 'Trạng thái giao hàng',
      dataIndex: 'trangThaiGiaoHang',
      key: 'trangThaiGiaoHang',
      render: (trangThaiGiaoHang) => <Tag color='volcano'>{trangThaiGiaoHang}</Tag>
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
          {/* <Button
            onClick={() => confirm({
              title: 'Hủy đơn hàng',
              content: 'Bạn có muốn hủy đơn hàng không?',
              onOk: () => handleCancelOrder(item.idDonHang),
              onCancel() { },
            })}
            type="text"
          >Hủy hàng</Button> */}
        </Space >
    }
  ];

  useEffect(() => {
    getInfoOrder();
  }, []);

  const getInfoOrder = async () => {
    try {
      const res = await handleAPI(`/nhanvien/getAllOrder `, '', 'get')
      if (res.success) {
        setOrderInfo(res.data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleCancelOrder = async (id) => {
    // const data = {
    //   idDonHang: id
    // }
    // console.log(data)
    // try {
    //   const res = await handleAPI('/khachhang/cancelOrder', data, 'post')
    //   if (res.success) {
    //     message.success(res.message)
    //     getInfoOrder()
    //   }
    // } catch (e) {
    //   message.warning(e.message)
    // }
  }
  const handleUpdateStatus = async (idDonHang, newStatus) => {
    try {
      setIsLoading(true);
      const data = {
        trangThai: newStatus,
        idDonHang: idDonHang
      }
      const res = await handleAPI('/nhanvien/updateOrderStatus', data, 'put');
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
              <Title level={3}>Danh sách đơn hàng</Title>
            </div>
            <div className="flex gap-2">
              <Button className=" font-medium" icon={<BsFilterSquare size={20} />}>Filters</Button>
              <Button className=" font-medium" >Download all</Button>
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

export default Order_Nhanvien