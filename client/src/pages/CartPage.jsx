import { Breadcrumb, Button, InputNumber, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cart } from '../db/Cart';
import PromotionalSectionHome from "../components/Home/PromotionalSectionHome";

const { confirm } = Modal
const CartPage = () => {
  const [dataSource, setDataSource] = useState(cart);
  const [countProduct, setCountProduct] = useState(0)
  // so luong san pham noi bang chua cap nhat duojc, nhung chach do chua co api
  useEffect(() => {
    setCountProduct(cart.length)
  }, [cart])
  const onChangeCount = (value, record) => {
    const updatedData = dataSource.map(item => {
      if (item.id === record.id) {
        return {
          ...item,
          count: value,
        };
      }
      return item;
    });
    setDataSource([...updatedData]);
  }

  const columns = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'title',
      key: 'title',
      width: 300
    },
    {
      title: 'Ảnh',
      dataIndex: 'img',
      key: 'img',
      width: 120,
      render: (img) => <img
        alt='product'
        src={img} width={60} height={60} />
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: 120,
      render: price => `${price.toLocaleString()} VND`,
    },
    {
      title: 'Số lượng',
      dataIndex: 'count',
      key: 'count',
      width: 140,
      render: (count, record) =>
        <InputNumber
          min={1} max={10}
          defaultValue={count}
          size="large"
          onChange={value => onChangeCount(value, record)}
        />
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      key: 'total',
      width: 140,
      render: (_, record) => <p className="text-greenCustom font-medium">{(record.price * record.count).toLocaleString()} VND</p>,
    },
    {
      title: 'Xóa',
      dataIndex: '',
      align: 'right',
      key: 'buttonContainer',
      width: 100,
      render: () => (
        <Button
          onClick={() => confirm({
            title: 'Xóasản phẩm hay không',
            content: 'Bạn có muốn xóa sản phẩm không?',
            onOk: () => { },
            onCancel() { },
          })}
          type="text"
          icon={<CiSquareRemove size={20}
            className="text-slate-600" />}></Button>
      )
    },
  ];

  return (
    <>
      <div>
        <div className='border-b-[1px]'>
          <div className='px-4 py-5'>
            <Breadcrumb
              items={[
                {
                  title: <p className='font-medium'>Trang chủ</p>,
                },
                {
                  title: <Link className='font-medium' to={'/product'}>Sản phẩm</Link>,
                },
                {
                  title: <p className='font-medium text-greenCustom'>Giỏ hàng</p>,
                }
              ]}
            />
          </div>
        </div>
        <div className="px-4 py-10">
          <p className="text-5xl text-customText font-semibold pb-3">Giỏ hàng</p>
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-8 col-span-12 ">
              <div className="flex justify-between">
                <p className="text-custom text-base">`Có <span className="text-greenCustom">${countProduct}</span> sản phẩm trong giỏ hàng của bạn`</p>
                <Button color="default" variant="filled" className="text-custom">
                  <FaRegTrashCan />
                  Xóa giỏ hàng
                </Button>
              </div>
              <div className="mt-10">
                <Table
                  scroll={{
                    y: 'calc(900px - 330px)'
                  }}
                  dataSource={dataSource}
                  columns={columns}
                  rowKey="key" />
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12 ">
              <div className="border-[1px] p-4 rounded-md">
                <div className="border-[1px] p-4 rounded-md">
                  <p className="text-customText text-2xl font-semibold">Thông tin đơn hàng</p>
                  <div className="flex justify-between mt-4">
                    <p className="text-custom text-base font-medium">Tổng giá</p>
                    <p className="text-greenCustom font-semibold text-xl text-right ">
                      {dataSource.reduce((acc, curr) => acc + curr.price * curr.count, 0).toLocaleString()} VND
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className="text-custom text-base font-medium">Phí vận chuyển</p>
                    <p className="text-customText text-base text-right">0 VND</p>
                  </div>
                  <div className="mt-10">
                    <button className='font-medium rounded-md text-lg bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 w-full py-4'>
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PromotionalSectionHome />
      </div>
    </>
  )
}

export default CartPage