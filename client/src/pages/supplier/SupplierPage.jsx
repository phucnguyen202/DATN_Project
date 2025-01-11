import React, { useEffect, useState } from 'react';
import { Typography, Input, Button, Card, Space, Tag, Segmented, Breadcrumb } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import handleAPI from '../../apis/HandleAPI';

const { Title, Text, Paragraph } = Typography;

const SupplierPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productSupplier, setProductSupplier] = useState([])
  const navigate = useNavigate();
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    getAllProductSupplier();
  }, []);

  const getAllProductSupplier = async () => {
    setIsLoading(true)
    try {
      const res = await handleAPI('/supplier/get-all-product-supplier', '', 'get')
      console.log('res::::', res)
      if (res.success) {
        const processedData = res.data.map(item => ({
          ...item,
          hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
        }));
        setProductSupplier(processedData)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }
  console.log('productSupplier::::', productSupplier)

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
        <div className="mb-10">
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
        {/* <div className="mb-8">
          <Space wrap className="flex justify-center gap-2">
            <Segmented
              options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
              onChange={(value) => {
                console.log(value); // string
              }}

            />
          </Space>
        </div> */}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productSupplier.map(post => (
            <Card
              key={post.idSanPhamNCC}
              hoverable
              className="h-full"
              cover={
                <img
                  alt={post.title}
                  src={post.hinhAnh[0]}
                  className="h-52 w-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300';
                  }}
                />
              }
              actions={[
                <Button type="text" icon={<HeartOutlined />}>Lưu</Button>,

                <Button Button
                  onClick={() => navigate('/dashboard/seller/nhaphang')}
                  style={{
                    backgroundColor: '#3BB77E',
                    color: 'white',
                  }} type="primary" icon={<ShoppingCartOutlined />}>Đặt hàng</Button>

              ]}
            >
              <Card.Meta
                title={<Title level={4}>{post.tenSanPhamNCC}</Title>}
                description={
                  <div className="space-y-3">
                    <Text strong className="block">
                      Nhà cung cấp: {post.tenNhaCungCap}
                    </Text>
                    <Paragraph ellipsis={{ rows: 2 }} className="text-gray-600">
                      {post.moTa}
                    </Paragraph>
                    <div className="flex flex-wrap gap-2">
                      <Tag color="blue">{post.tenDanhMuc}</Tag>
                    </div>
                    <div className="pt-2">
                      <Text type="secondary" className="block">
                        Đơn hàng tối đa: {post.soLuong} sản phẩm
                      </Text>
                      <Text className="text-red-500 font-semibold text-lg">
                        Giá: {formatCurrency(post.gia)}đ
                      </Text>
                    </div>
                  </div>
                }
              />
            </Card>
          ))}
        </div >
      </div >
    </>
  );
};

export default SupplierPage;