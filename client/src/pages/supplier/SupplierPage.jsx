import React, { useState } from 'react';
import { Typography, Input, Button, Card, Space, Tag, Segmented, Breadcrumb } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const SupplierPage = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Bộ sưu tập quần áo mùa hè 2024',
      supplier: 'Công ty ABC',
      description: 'Bộ sưu tập mới nhất với nhiều mẫu mã đa dạng, chất liệu cao cấp...',
      image: 'https://example.com/image1.jpg',
      categories: ['Thời trang', 'Mùa hè'],
      minOrder: 100,
      price: 150000,
    },
    {
      id: 2,
      title: 'Bộ sưu tập quần áo mùa hè 2024',
      supplier: 'Công ty ABC',
      description: 'Bộ sưu tập mới nhất với nhiều mẫu mã đa dạng, chất liệu cao cấp...',
      image: 'https://example.com/image1.jpg',
      categories: ['Thời trang', 'Mùa hè'],
      minOrder: 100,
      price: 150000,
    },
    {
      id: 3,
      title: 'Bộ sưu tập quần áo mùa hè 2024',
      supplier: 'Công ty ABC',
      description: 'Bộ sưu tập mới nhất với nhiều mẫu mã đa dạng, chất liệu cao cấp...',
      image: 'https://example.com/image1.jpg',
      categories: ['Thời trang', 'Mùa hè'],
      minOrder: 100,
      price: 150000,
    },
    {
      id: 4,
      title: 'Bộ sưu tập quần áo mùa hè 2024',
      supplier: 'Công ty ABC',
      description: 'Bộ sưu tập mới nhất với nhiều mẫu mã đa dạng, chất liệu cao cấp...',
      image: 'https://example.com/image1.jpg',
      categories: ['Thời trang', 'Mùa hè'],
      minOrder: 100,
      price: 150000,
    },
  ]);

  return (
    <>
      <div className='border-b-[1px]'>
        <div className='px-4 py-5'>
          <Breadcrumb
            items={[
              {
                title: <p className='font-medium'>Trang chủ</p>,
              },
              {
                title: <p className='font-medium'>Nhà cung cấp</p>,
              },

            ]}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className='text-6xl text-customText text-center mb-10 mt-6 font-bold'>Sản phẩm từ nhà cung cấp</h1>
          <div className="max-w-2xl mx-auto">
            <Input.Search
              placeholder="Tìm kiếm sản phẩm..."
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              className="w-full"
              onSearch={(value) => console.log(value)}
            />
          </div>
        </div>
        {/* Filter Categories */}
        <div className="mb-8">
          <Space wrap className="flex justify-center gap-2">
            <Segmented
              options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
              onChange={(value) => {
                console.log(value); // string
              }}

            />
          </Space>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map(post => (
            <Card
              key={post.id}
              hoverable
              className="h-full"
              cover={
                <img
                  alt={post.title}
                  src={post.image}
                  className="h-64 w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300';
                  }}
                />
              }
              actions={[
                <Button type="text" icon={<HeartOutlined />}>Lưu</Button>,
                <Button type="primary" icon={<ShoppingCartOutlined />}>Đặt hàng</Button>
              ]}
            >
              <Card.Meta
                title={<Title level={4}>{post.title}</Title>}
                description={
                  <div className="space-y-3">
                    <Text strong className="block">
                      Nhà cung cấp: {post.supplier}
                    </Text>
                    <Paragraph ellipsis={{ rows: 2 }} className="text-gray-600">
                      {post.description}
                    </Paragraph>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map(cat => (
                        <Tag key={cat} color="blue">{cat}</Tag>
                      ))}
                    </div>
                    <div className="pt-2">
                      <Text type="secondary" className="block">
                        Đơn hàng tối thiểu: {post.minOrder} sản phẩm
                      </Text>
                      <Text className="text-red-500 font-semibold text-lg">
                        Giá: {post.price.toLocaleString('vi-VN')}đ
                      </Text>
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default SupplierPage;