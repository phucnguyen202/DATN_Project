import { Input, List, Spin } from "antd"
import { useState } from "react";
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom";
import handleAPI from "../apis/HandleAPI";

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let debounceTimeout;
  const handleSearch = async (value) => {
    setQuery(value);
    if (!value) return setProducts([]);
    setLoading(true);
    try {
      const res = await handleAPI(`/khachhang/search?query=${value}`, '', 'get')
      if (res.success) {
        const processedData = res.data?.searchResults.map(item => ({
          ...item,
          hinhAnh: item.hinhAnh?.split(',').filter(img => img.trim()) || []
        }));
        setProducts(processedData);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  const handleDebouncedSearch = (value) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      handleSearch(value);
    }, 500); // 500ms delay
  };
  const formatCurrency = (amount) => {
    return amount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <>
      <div className="w-full">
        <Input
          style={{ border: 'none', }}
          variant="borderless"
          className='py-3 text-customText placeholder-[#a74040]'
          placeholder="Tìm kiếm sản phẩm..."
          suffix={<BiSearch className="text-slate-500" size={25} />}
          onChange={(e) => handleDebouncedSearch(e.target.value)}
        />
      </div>
      {loading && <Spin style={{ display: 'block', marginTop: '20px' }} />}
      {!loading && products.length > 0 && (
        <div
          style={{
            position: 'relative',
          }}>
          <div style={{
            position: 'absolute',
            zIndex: 10,
            backgroundColor: 'white',
            top: '190px',
            left: '-357px',
            transform: 'translate(-50%, -50%)',
            width: '720px',
            height: '300px',
            overflow: 'auto',
          }}>
            <div>
              <List
                bordered
                header={<div style={{
                  color: '#253D4E',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '22px',
                }}>Kết quả tìm kiếm</div>}
                dataSource={products}
                renderItem={(product) => (
                  <List.Item key={product.idSanPham}>
                    <List.Item.Meta
                      avatar={
                        <img
                          src={product.hinhAnh[0] || 'https://via.placeholder.com/100'} // Hiển thị ảnh sản phẩm, dùng ảnh mặc định nếu không có
                          alt={product.tenSanPham}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 8,
                          }}
                        />
                      }
                      title={<Link
                        style={{
                          color: '#253D4E',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '18px',
                        }} to={`/detail/${product.idSanPham}/${product.tenSanPham}`}>{product.tenSanPham}</Link>}
                      description={`Giá: ${formatCurrency(product.gia)} VND`}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchComponent