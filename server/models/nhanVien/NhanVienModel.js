const db = require('../../config/connect')

// them san pham
const addProduct = (product, callback) => {
  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho } = product;
  const sql = 'INSERT INTO tb_sanpham (tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho], callback);
}

// Thêm hình ảnh sản phẩm
const addImage = (productId, imageSrc, callback) => {
  const sql = 'INSERT INTO tb_hinhsanpham (sanPhamId, hinhAnh) VALUES (?, ?)';
  db.query(sql, [productId, imageSrc], callback);
}

// Lấy danh sách sản phẩm phân trang
const getProductsByPage = (limit, offset, callback) => {
  const sql = `
  SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    GROUP BY 
      sp.idSanPham
    LIMIT ? OFFSET ?;
  `;
  db.query(sql, [limit, offset], callback);
};

// lấy tổng sản phẩm
const getTotalProducts = (callback) => {
  const sql = 'SELECT COUNT(*) as total FROM tb_sanpham';
  db.query(sql, callback);
}

// update thông tin sản phẩm
const updateProductById = (product, productId, callback) => {
  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho } = product;
  const sql = 'UPDATE tb_sanpham SET tenSanPham =?, gia =?, moTa =?, dongGoiGiaoHang =?, deXuat =?, canhBao =?, danhMucId =?, tonKho =? WHERE idSanPham =?';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho, productId], callback);
}
// update ảnh sản phẩm
const updateImageById = (productId, imageSrc, callback) => {
  const sql = 'UPDATE tb_hinhsanpham SET hinhAnh =? WHERE sanPhamId =?';
  db.query(sql, [imageSrc, productId], callback);
}

// Xóa img sản phẩm
const deleteImagesbyId = (productId, callback) => {
  const deleteImagesSql = 'DELETE FROM tb_hinhsanpham WHERE sanPhamId = ?';
  db.query(deleteImagesSql, [productId], callback);
}
//  xóa sản phẩm bằng id
const deleteProductById = (productId, callback) => {
  const deleteProductSql = 'DELETE FROM tb_sanpham WHERE idSanPham = ?'
  db.query(deleteProductSql, [productId], callback);
}

//lấy tất cả sản phẩm
const getAllProducts = (callback) => {
  const sql = `
    SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    GROUP BY 
      sp.idSanPham`;
  db.query(sql, callback);
}

// lấy sản phẩm theo id
const getProductById = (productId, callback) => {
  const sql = `
    SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    WHERE 
      sp.idSanPham = ?
    GROUP BY 
      sp.idSanPham;`;
  db.query(sql, [productId], callback);
}

// lấy tất cả đơn hàng mà người đùng đã đặt thanh toán
const getAllOrderPayment = (callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE thanhToan ='Đã thanh toán'`
  db.query(sql, callback);
}

// cập nhật trạng thái đơn hàng
const updateOrderStatus = (trangThai, idDonHang, callback) => {
  const sql = `UPDATE tb_donhang SET trangThai =? WHERE idDonHang =?`;
  db.query(sql, [trangThai, idDonHang], callback);
}

module.exports = {
  updateProductById, updateImageById, getAllProducts, getProductById, getAllOrderPayment, updateOrderStatus,
  addProduct, addImage, getProductsByPage, getTotalProducts, deleteProductById, deleteImagesbyId
}
