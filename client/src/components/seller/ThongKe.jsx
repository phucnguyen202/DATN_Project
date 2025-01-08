import { Card, Col, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import handleAPI from "../../apis/HandleAPI";

const formatCurrency = (amount) => {
  return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ThongKe = () => {
  const [loading, setLoading] = useState(false);
  const [dailyRevenueData, setDailyRevenueData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  useEffect(() => {
    getStatistical_day()
    getStatistical_month()
  }, []);

  // Thống kê doanh thu theo ngày
  const getStatistical_day = async () => {
    setLoading(true);
    try {
      const res = await handleAPI('/seller/getStatistical-day', '', 'get');
      if (res.success) {
        setDailyRevenueData(res.data);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }
  // Thống kê doanh thu theo tháng
  const getStatistical_month = async () => {
    setLoading(true);
    try {
      const res = await handleAPI('/seller/getStatistical-month', '', 'get');
      if (res.success) {
        setRevenueData(res.data);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  const columns = [
    {
      title: "Ngày",
      dataIndex: "ngay",
      key: "ngay",
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      title: "Số đơn hàng",
      dataIndex: "tong_so_don_hang",
      key: "tong_so_don_hang",
    },
    {
      title: "Doanh thu (VNĐ)",
      dataIndex: "tong_doanh_thu",
      key: "tong_doanh_thu",
      render: (tong_doanh_thu) => <p>{formatCurrency(tong_doanh_thu)}</p>
    },
  ];
  return (
    <>
      {/* <div className='grid grid-cols-3 mb-4 gap-4'>
        <div className='border-[1px] p-5 rounded-lg col-span-1'>
          <Statistic
            title="Sản phẩm"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<IoArrowUpOutline />}
            suffix="%"
          />
        </div>
        <div className='border-[1px] p-5 rounded-lg col-span-1'>
          <Statistic
            title="Doanh thu"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<IoArrowUpOutline />}
            suffix="%"
          />
        </div>
        <div className='border-[1px] p-5 rounded-lg col-span-1'>
          <Statistic
            title="Người dùng"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<IoArrowUpOutline />}

            suffix="%"
          />
        </div>
      </div> */}

      <div>
        <h2 className="text-2xl font-bold text-customText mb-4">Thống kê doanh thu cửa hàng</h2>
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Biểu đồ doanh thu theo tháng" >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col span={24} style={{ marginBottom: "24px" }}>
            <Card title="Chi tiết doanh thu theo ngày">
              <Table
                dataSource={dailyRevenueData}
                columns={columns}
                loading={loading}
                pagination={{ pageSize: 5 }}
              />
            </Card>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default ThongKe