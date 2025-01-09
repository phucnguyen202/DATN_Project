import { Badge, Card, message, Rate, Space, Tabs, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import handleAPI from '../../apis/HandleAPI';
import CardComponent from '../CardComponent';
const { Title, Text } = Typography;
const operations = <Title level={2} style={{ margin: '0px', color: '#253D4E' }} className='max-md:hidden'>Sản Phẩm Phổ Biến</Title>

const PopularProducts = () => {

  const [activeTab, setActiveTab] = useState('1');
  const [dataSource, setDataSource] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  //category
  useEffect(() => {
    const getAllCategory = async () => {
      setIsLoading(true);
      try {
        const res = await handleAPI('/getAlldanhmuc', '', 'get');
        if (res.data) {
          setDataSource(res.data.result);
        }
      } catch (e) {
        message.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategory();
  }, []);
  useEffect(() => {
    const getToCategory = () => {
      if (dataSource?.length) {
        const items = dataSource.map((item, index) => (
          {
            key: `${item.idDanhMuc}`,
            label: <p className='text-base'>{item.tenDanhMuc}</p>
          }
        ))
        setCategory(items);
      }
    }
    if (dataSource) {
      getToCategory();
    }
  }, [dataSource]);

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    { key: '1', label: 'Tất cả', },
    ...category
  ];


  useEffect(() => {
    const getPopularProducts = async () => {
      setIsLoading(true);
      try {
        const res = await handleAPI('/nhanvien/getallproducts', '', 'get');
        if (res.success) {
          const processedData = res.data.map(item => ({
            ...item,
            hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
          }));
          setData(processedData);
        }
      } catch (e) {
        message.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPopularProducts();
  }, [])

  const renderCards = (tabkey) => (
    // console.log(tabkey)
    < div >
      <div className='grid max-md:grid-cols-1 grid-cols-3 xl:grid-cols-5 gap-4'>
        {
          data?.length > 0 && data.filter(item => tabkey === '1' ? true : item.danhMucId === parseInt(tabkey)).map((item, index) => (
            <CardComponent key={index} item={item} />
          ))
        }
      </div>
    </ div >
  );


  return (
    <div className="px-4 py-6">
      <Tabs
        className='pb-10 font-medium'
        defaultActiveKey="1"
        items={items} onChange={onChange}
        tabBarExtraContent={operations} />
      {renderCards(activeTab)}
    </div>
  )
}

export default PopularProducts