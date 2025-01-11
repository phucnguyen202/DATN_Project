
import { Button, message, Modal, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import handleAPI from '../../apis/HandleAPI';
const { confirm } = Modal
const Confirm_nhapHang = () => {

  const user = useSelector(state => state?.auth?.currentData?.user);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmData, setConfirmData] = useState([])

  const columns = [
    {
      title: 'ID nhập hàng',
      dataIndex: 'idNhapHang',
      key: 'idNhapHang',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'tenSanPham',
      key: 'tenSanPham',
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',
    },
    {
      title: 'Thời gian đặt hàng',
      dataIndex: 'ngayTao',
      key: 'ngayTao',
      render: (thoiGianDatHang) => <p>{dayjs(thoiGianDatHang).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai) => <Tag color={trangThai === 'Chờ xử lý' ? 'lime' : trangThai === 'Đã từ chối' ? 'red' : 'green'}>{trangThai}</Tag>
    },
    {
      title: 'Ghi chú',
      dataIndex: 'ghiChu',
      key: 'ghiChu',
    },
    {
      key: 'buttonContainer',
      align: 'right',
      title: 'Actions',
      width: 100,
      dataIndex: '',
      render: (item) =>
        <Space>
          <Button
            onClick={() => confirm({
              title: 'Xác nhận đơn hàng',
              content: 'Bạn có muốn xác nhận đơn hàng không?',
              onOk: () => confirm_NhapHang(item.idNhapHang),
              onCancel() { },
            })}
            color="primary"
            variant="filled">
            Xác nhận
          </Button>
          <Button
            onClick={() => confirm({
              title: 'Hủy đơn hàng',
              content: 'Bạn có muốn hủy đơn hàng không?',
              onOk: () => handleCancelOrder(item.idNhapHang),
              onCancel() { },
            })}
            type="text"
          >Hủy</Button>
        </Space >
    }
  ];



  useEffect(() => {
    getConfirmNhapHang();
  }, []);

  const getConfirmNhapHang = async () => {
    setIsLoading(true)
    try {
      const res = await handleAPI('/supplier/get-all-nhaphang-byid', '', 'get')
      if (res.success) {
        setConfirmData(res.data)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const confirm_NhapHang = async (idNhapHang) => {
    const data = {
      trangThai: 'Đã duyệt',
      idNhapHang: idNhapHang
    }
    try {
      setIsLoading(true)
      const res = await handleAPI('/supplier/update-status-nhaphang', data, 'put')
      if (res.success) {
        message.success(res.message)
        getConfirmNhapHang()
      } else {
        message.error(res.message)
      }
    } catch (e) {
      console.error(e)
    }
  }
  const handleCancelOrder = async (idNhapHang) => {
    const data = {
      trangThai: 'Đã từ chối',
      idNhapHang: idNhapHang
    }
    try {
      setIsLoading(true)
      const res = await handleAPI('/supplier/cancel-nhaphang', data, 'put')
      if (res.success) {
        message.success('Đã hủy yêu cầu nhập hàng thành công')
        getConfirmNhapHang()
      } else {
        console.log("Lỗi")
      }
    } catch (e) {
      console.error(e)
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
        dataSource={confirmData}
        columns={columns} />
    </>
  )
}

export default Confirm_nhapHang