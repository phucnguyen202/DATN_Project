import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Modal, Space, Table } from 'antd';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import handleAPI from "../../apis/HandleAPI";

const { confirm } = Modal
const CreateDanhMuc = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editDanhMuc, setEditDanhMuc] = useState(null);
  const [danhMucInput, setDanhMucInput] = useState('');
  const columns = [
    {
      title: '#',
      dataIndex: 'idDanhMuc',
      key: 'idDanhMuc',
    },
    {
      title: 'Tên danh mục',
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
          <Button
            type="text"
            onClick={() => {
              showModal()
              setEditDanhMuc(item)
            }}
            icon={<CiEdit size={20}
              className="text-slate-600" />}></Button>
          <Button
            onClick={() => confirm({
              title: 'Xóa danh mục sản phẩm',
              content: 'Bạn có muốn xóa danh mục sản phẩm không?',
              onOk: () => handleDeleteDanhMuc(item.idDanhMuc),
              onCancel() { },
            })}
            type="text"
            icon={<CiSquareRemove size={20}
              className="text-slate-600" />}></Button>
        </Space >
    }
  ];

  // cap nhatj dah muc
  const handleOk = async () => {
    try {
      const data = {
        tenDanhMuc: danhMucInput,
        idDanhMuc: editDanhMuc?.idDanhMuc
      }
      const res = await handleAPI('/seller/updateDanhMuc', data, 'put');
      if (res.success) {
        message.success(res.message)
        setIsModalOpen(false);
        getAllDanhMuc();
      }
    } catch (e) {
      console.error(e.message)
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllDanhMuc();
  }, []);

  const handleDeleteDanhMuc = async (id) => {
    console.log(id)
    try {
      const res = await handleAPI(`/seller/deletedanhmuc?idDanhMuc=${id}`, '', 'delete');
      if (res.success) {
        message.success(res.message)
        getAllDanhMuc();
      }
    } catch (err) {
      console.error(err)
    }
  }

  const getAllDanhMuc = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/getAlldanhmuc', '', 'get')
      res.data && setDataSource(res.data)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateDanhMuc = async (value) => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/seller/danhmuc', value, 'post')
      if (res.success) {
        message.success(res.message)
        form.resetFields();
        getAllDanhMuc();
      }
    } catch (e) {
      console.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div >
        <h2 className="text-2xl font-bold mb-4">Danh mục sản phẩm</h2>
        <Form
          onFinish={handleCreateDanhMuc}
          form={form}
          name="layout-multiple-horizontal"
          layout="vertical">
          <Form.Item
            className='block  font-medium mb-2'
            layout="vertical"
            label="Tên danh mục sản phẩm"
            name="tenDanhMuc"
          >
            <Input />
          </Form.Item>
          <Form.Item >
            <Button
              onClick={() => form.submit()}
              style={{
                backgroundColor: '#3BB77E',
                color: 'white',
              }}>Thêm danh mục</Button>
          </Form.Item>
        </Form>
        <div className='mt-10'>
          <Table
            loading={isLoading}
            dataSource={dataSource}
            columns={columns} />
        </div>
      </div>
      <Modal title="Cập nhật danh mục"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Input
          defaultValue={editDanhMuc?.tenDanhMuc}
          onChange={(e) => setDanhMucInput(e.target.value)} />
      </Modal>
    </>
  )
}

export default CreateDanhMuc