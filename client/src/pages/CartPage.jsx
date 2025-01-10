import { Breadcrumb, Button, InputNumber, message, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import PromotionalSectionHome from "../components/Home/PromotionalSectionHome";
import handleAPI from "../apis/HandleAPI";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../redux/reducers/productReducer";

const { confirm } = Modal
const CartPage = () => {
  const user = useSelector(state => state?.auth?.currentData?.user)
  const cartCount = useSelector(state => state?.product?.cartCount);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const [diaChi, setDiaChi] = useState('');
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    if (user?.idNguoiDung) {
      getItemsCart(user.idNguoiDung);
    }
  }, [user, cartCount]);

  const getItemsCart = async (id) => {
    setLoading(true);
    try {
      const res = await handleAPI(`/khachhang/getCartById?userId=${id}`, '', 'get');
      if (res.success) {
        const processedData = res.data.map(item => ({
          ...item,
          hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
        }));
        setDataSource(processedData);
        dispatch(updateCartCount(res.data.length));
      }
    } catch (err) {
      console.log('error::', err)
    } finally {
      setLoading(false);
    }
  }

  const onChangeCount = async (value, record) => {
    // Tạo bản sao của dataSource và cập nhật số lượng
    const updatedDataSource = dataSource.map((item) => {
      if (item.idGioHang === record.idGioHang) {
        return { ...item, soLuong: value };
      }
      return item;
    });

    setDataSource(updatedDataSource); // Cập nhật lại dataSource
    // api cap nhat so luong
    try {
      const dataCart = {
        idGioHang: record.idGioHang,
        soLuong: value
      }
      const res = await handleAPI('/khachhang/updateQuantity', dataCart, 'put')
      if (res.success) {
        console.log('res::', res.message)
      }
    } catch (err) {
      console.log('error::', err)
    }
  }

  const handleDeleteCart = async (id) => {
    try {
      const res = await handleAPI(`/khachhang/deleteProductInCart?idGioHang=${id}`, '', 'delete')
      console.log(res)
      if (res.success) {
        message.success(res.message);
        getItemsCart(user.id);
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleAPIChange = async () => {
    try {
      if (diaChi === '') {
        message.warning('Vui lòng nhập địa chỉ giao hàng');
      } else {
        if (cartCount > 0) {
          const dataThanhToan = {
            nguoiDungId: user.idNguoiDung,
            diaChi: diaChi,
            tongTien: dataSource.reduce((total, item) => total + item.soLuong * item.gia, 0)
          }
          const res = await handleAPI('/khachhang/createOrder', dataThanhToan, 'post');
          if (res.success) {
            navigate('/payment');
            await handleAPI(`/khachhang/deleteCart?userId=${user.idNguoiDung}`, '', 'delete');
            dispatch(updateCartCount(0));
            setDataSource([]);
            setDiaChi('');
          }
        } else {
          message.warning('Giỏ hàng trống, vui lòng chọn sản phẩm');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    {
      title: 'Tên Sản Phẩm',
      dataIndex: 'tenSanPham',
      key: 'tenSanPham',
      width: 300
    },
    {
      title: 'Ảnh',
      dataIndex: 'hinhAnh',
      key: 'hinhAnh',
      width: 120,
      render: (hinhAnh) => <img
        alt='product'
        src={hinhAnh[0]} width={60} height={60} />
    },
    {
      title: 'Giá',
      dataIndex: 'gia',
      key: 'gia',
      width: 120,
      render: price => `${formatCurrency(price)} VND`,
    },
    {
      title: 'Số lượng',
      dataIndex: 'soLuong',
      key: 'soLuong',
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
      render: (_, record) => <p className="text-greenCustom font-medium">{formatCurrency(record.gia * record.soLuong)} VND</p>,
    },
    {
      title: 'Xóa',
      dataIndex: '',
      align: 'right',
      key: 'buttonContainer',
      width: 100,
      render: (item) => (

        <Button
          onClick={() => confirm({
            title: 'Xóa sản phẩm hay không',
            content: 'Bạn có muốn xóa sản phẩm không?',
            onOk: () => { handleDeleteCart(item.idGioHang) },
            onCancel() { },
          })}
          type="text"
          icon={< CiSquareRemove size={20} className="text-slate-600" />}
        >

        </Button >
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
                <p className="text-custom text-base">Có <span className="text-greenCustom">{cartCount}</span> sản phẩm trong giỏ hàng của bạn</p>
                <Button color="default" variant="filled" className="text-custom">
                  <FaRegTrashCan />
                  Xóa giỏ hàng
                </Button>
              </div>
              <div className="mt-10">
                {
                  cartCount === 0 ?
                    <p className="text-custom text-center text-xl">
                      Không có sản phẩm nào trong giỏ hàng của bạn
                    </p> :
                    <Table
                      loading={loading}
                      scroll={{ y: 'calc(900px - 330px)' }}
                      dataSource={dataSource}
                      columns={columns}
                      rowKey="key"
                    />
                }
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12 ">
              <div className="border-[1px] p-4 rounded-md">
                <div className="border-[1px] p-4 rounded-md">
                  <p className="text-customText text-2xl font-semibold">Thông tin đơn hàng</p>
                  <div className="flex justify-between mt-4">
                    <p className="text-custom text-base font-medium">Tổng giá</p>
                    <p className="text-greenCustom font-semibold text-xl text-right ">
                      {formatCurrency(dataSource.reduce((acc, curr) => acc + curr.gia * curr.soLuong, 0))} VND
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className="text-custom text-base font-medium">Phí vận chuyển</p>
                    <p className="text-custom text-sm text-right">Miễn phí vẫn chuyển</p>
                  </div>
                  <div className="mt-4">
                    <input
                      value={diaChi}
                      onChange={(e) => setDiaChi(e.target.value)}
                      className="w-full p-4 font-medium text-customText border-[1px] border-green-200 rounded-md outline-none text-sm" type="text" placeholder="Nhập địa chỉ" />
                  </div>
                  <div className="mt-10 flex gap-4">
                    <button
                      onClick={handleAPIChange}
                      className='font-medium rounded-md text-lg bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 w-full py-4'>
                      Xác nhận đặt hàng
                    </button>
                    <Link
                      to={'/payment'}
                      className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-white text-lg">
                      Thanh Toán
                    </Link>
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