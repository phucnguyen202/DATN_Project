import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Space, Table } from 'antd';
import handleAPI from '../../apis/HandleAPI';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/reducers/productReducer';


const CreateDanhMuc = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

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
          <Button type="text"
            // onClick={() => {
            //   setIsModalOpen(true);
            // }}
            icon={<CiEdit size={20}
              className="text-slate-600" />}></Button>
          <Button
            // onClick={() => confirm({
            //   title: 'Xóa nhà cung cấp',
            //   content: 'Bạn có muốn xóa nhà cung cấp không?',
            //   // onOk: () => handleDeleteSupplier(item._id),
            //   // onCancel() { },
            // })}
            type="text"
            icon={<CiSquareRemove size={20}
              className="text-slate-600" />}></Button>
        </Space >
    }
  ];

  useEffect(() => {
    getAllDanhMuc();
  }, []);

  const getAllDanhMuc = async () => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/getAlldanhmuc', '', 'get')
      res.data && setDataSource(res?.data?.result)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateDanhMuc = async (value) => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/admin/danhmuc', value, 'post')
      message.success(res.message)
      getAllDanhMuc();
    } catch (e) {
      message.error(e.message)
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
    </>
  )
}

export default CreateDanhMuc