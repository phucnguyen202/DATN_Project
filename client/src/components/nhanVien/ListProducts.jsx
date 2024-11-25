import { Table } from 'antd'
import React from 'react'

const ListProducts = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];


  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>

        <Table dataSource={dataSource} columns={columns} />
      </div>
    </>
  )
}

export default ListProducts