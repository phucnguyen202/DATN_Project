import { Button, Form, InputNumber, message, Modal, Select, Table, Tag } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import handleAPI from '../../apis/HandleAPI';
import Title from 'antd/es/typography/Title';
import { BsFilterSquare } from 'react-icons/bs';
const { confirm } = Modal
const History_NhapHang = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [dataSupplier, setDataSupplier] = useState([]);
  const columns = [
    {
      title: 'ID nhập hàng',
      dataIndex: 'idNhapHang',
      key: 'idNhapHang',
    },
    {
      title: 'ID sản phẩm',
      dataIndex: 'sanPhamId',
      key: 'sanPhamId',
    },
    {
      title: 'Tên nhà cung cấp',
      dataIndex: 'tenNhaCungCap',
      key: 'tenNhaCungCap',
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangThai',
      key: 'trangThai',
      render: (trangThai) => <Tag color='lime'>{trangThai}</Tag>
    },
    {
      title: 'Ngày gửi',
      dataIndex: 'ngayTao',
      key: 'ngayTao',
      render: (ngayTao) => <p>{dayjs(ngayTao).format('DD/MM/YYYY HH:mm:ss')}</p>
    },
    {
      title: 'Xác nhận',
      dataIndex: 'xacNhan',
      key: 'xacNhan',
      render: (xacNhan) => <Tag color='lime'>{xacNhan}</Tag>
    },
    {
      title: 'Ghi chú',
      dataIndex: 'ghiChu',
      key: 'ghiChu',
    },
    // {
    //   key: 'buttonContainer',
    //   align: 'right',
    //   title: 'Actions',
    //   width: 100,
    //   dataIndex: '',
    //   render: (item) =>
    //     item.trangThai === 'Đã duyệt' ? (
    //       <Button
    //         onClick={() => confirm({
    //           title: 'Xác nhận nhập hàng',
    //           content: 'Bạn có muốn xác nhận nhập hàng không?',
    //           onOk: () => confirm_nhaHang(item?.idNhapHang),
    //           onCancel() { },
    //         })}
    //         style={{
    //           marginTop: '20px',
    //           backgroundColor: '#3BB77E',
    //           color: 'white',
    //         }}>
    //         Xác nhận
    //       </Button>
    //     ) : null // Không hiển thị nút nếu trạng thái không phải "Đã duyệt"
    // }
  ];

  useEffect(() => {
    getAllNhapHang();
  }, []);

  const getAllNhapHang = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/get-confirmed-nhaphang', '', 'get')
      res.data && setDataSource(res?.data)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Table
        loading={isLoading}
        dataSource={dataSource}
        columns={columns}
        // pagination={{
        //   current: pagination.current,
        //   pageSize: pagination.pageSize,
        //   total: pagination.total,
        //   showSizeChanger: true,
        // }}
        // onChange={handleTableChange}
        title={() => (
          <div className="flex justify-between">
            <div>
              <Title level={3}>Lịch sử nhập hàng</Title>
            </div>
            <div className="flex gap-2">
              <Button className=" font-medium" icon={<BsFilterSquare size={20} />}>Filters</Button>
              <Button className=" font-medium" >Download all</Button>
            </div>
          </div>
        )}
      />
    </>
  )
}

export default History_NhapHang