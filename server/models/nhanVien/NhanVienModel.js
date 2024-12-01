
const db = require('../../config/connect')


// them san pham
const addProduct = (product, callback) => {

  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId } = product;
  const sql = 'INSERT INTO tb_sanpham (tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId], callback);
}

// Thêm hình ảnh sản phẩm
const addImage = (productId, imageSrc, callback) => {
  const sql = 'INSERT INTO tb_hinhsanpham (sanPhamId, hinhAnh) VALUES (?, ?)';
  db.query(sql, [productId, imageSrc], callback);
}

module.exports = { addProduct, addImage }
