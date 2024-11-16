import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Space, Table } from 'antd';
import handleAPI from '../../apis/HandleAPI';
import { CiEdit, CiSquareRemove } from 'react-icons/ci';


const CreateDanhMuc = () => {

  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

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
      const res = await handleAPI('/admin/alldanhmuc', '', 'get')
      res.data && setDataSource(res?.data?.result)
    } catch (e) {
      message.error(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (value) => {
    setIsLoading(true);
    try {
      const res = await handleAPI('/admin/danhmuc', value, 'post')
      message.success(res.message)
      await getAllDanhMuc();
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
          onFinish={handleLogin}
          form={form}
          name="layout-multiple-horizontal"
          layout="vertical">
          <Form.Item
            className='block text-gray-700 font-medium mb-2'
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