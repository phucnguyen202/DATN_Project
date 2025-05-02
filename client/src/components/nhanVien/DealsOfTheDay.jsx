import { Button, DatePicker, Form, Input, InputNumber, message, Modal, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { BsFilterSquare } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import handleAPI from '../../apis/HandleAPI';
const { confirm } = Modal

const DealsOfTheDay = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0, });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
    },
    {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
    },

    {
      key: 'buttonContainer',
      align: 'right',
      title: 'Actions',
      width: 100,
      dataIndex: '',
      render: (item) =>
        <Button color="danger" variant="filled"
          onClick={() => {
            showModal()
          }}
          icon={<CiEdit size={20}
            className="text-slate-800" />}>
          Tạo khuyến mãi
        </Button>
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
  const handleSubmit = () => {

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

        <Modal title="Tạo khuyến mãi" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            disabled={isLoading}
            onFinish={handleSubmit}
            size='large'
            form={form}
            layout='vertical'
          >
            <Form.Item
              label="InputNumber"
              name="InputNumber"

              rules={[{ required: true, message: 'Please input!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label="DatePicker"
              name="DatePicker"
              rules={[{ required: true, message: 'Please input!' }]}
            >
              <DatePicker />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  )
}

export default DealsOfTheDay