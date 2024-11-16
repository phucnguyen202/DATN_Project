import { Select } from 'antd';
import React, { useState } from 'react'

const DashboardSellerCreateProduct = () => {
  const options = [
    {
      label: 'gold',
      value: 'gold',
    },
    {
      label: 'lime',
      value: 'lime',
    },
    {
      label: 'green',
      value: 'green',
    },
    {
      label: 'cyan',
      value: 'cyan',
    },
  ];
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    mainImage: null,
    subImages: [null, null, null],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, imageType, index = null) => {
    if (imageType === 'main') {
      setFormData({ ...formData, mainImage: e.target.files[0] });
    } else {
      const newSubImages = [...formData.subImages];
      newSubImages[index] = e.target.files[0];
      setFormData({ ...formData, subImages: newSubImages });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic submit dữ liệu ở đây
    console.log(formData);
  };

  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return <span className='text-gray-400'>Chọn loại của sản phẩm</span>;
  };
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm mới</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tên sản phẩm"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Mô tả sản phẩm</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mô tả sản phẩm"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Danh mục</label>
            <Select
              labelRender={labelRender}
              defaultValue="1"
              style={{
                width: '100%',
              }}
              options={options}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập giá sản phẩm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Hình ảnh chính</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 'main')}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">3 Ảnh phụ</label>
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                type="file"
                onChange={(e) => handleFileChange(e, 'sub', index)}
                className="w-full p-2 border border-gray-300 rounded-md mb-2"
                accept="image/*"
                required
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Thêm sản phẩm
          </button>
        </form>
      </div>

    </>
  )
}

export default DashboardSellerCreateProduct