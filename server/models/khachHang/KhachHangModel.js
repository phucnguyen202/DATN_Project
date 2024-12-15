const db = require('../../config/connect')


//Tìm sản phẩm trong giỏ hàng
const findByProduct = (idSanPham, nguoiDungId, callback) => {
  const sql = 'SELECT * FROM tb_gioHang WHERE nguoiDungId = ? AND sanPhamId = ?';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

// thêm sản phẩm vào giỏ hàng
const addToCart = (idSanPham, nguoiDungId, callback) => {
  const sql = 'INSERT INTO tb_gioHang (nguoiDungId, sanPhamId, soLuong) VALUES (?, ?, 1)';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

const getCartById = (idNguoiDung, callback) => {
  const sql = `
  SELECT 
      gh.idGioHang,
      sp.idSanPham,
      sp.tenSanPham,
      sp.gia,
      sp.tonKho,
      gh.soLuong,
      (sp.gia * gh.soLuong) AS tongTien,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
  FROM 
      tb_gioHang gh
  JOIN 
      tb_sanpham sp ON gh.sanPhamId = sp.idSanPham
  LEFT JOIN 
      tb_hinhsanpham hsp ON sp.idSanPham = hsp.sanPhamId
  WHERE 
      gh.nguoiDungId = ?
  GROUP BY 
      gh.idGioHang, sp.idSanPham;
`;

  db.query(sql, [idNguoiDung], callback);
}

// Xóa sản phẩm khỏi giỏ hàng
const deleteFromCart = (idGioHang, callback) => {
  const sql = 'DELETE FROM tb_giohang WHERE idGioHang =?';
  db.query(sql, [idGioHang], callback);
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
const updateQuantity = (soLuong, idGioHang, callback) => {
  const sql = 'UPDATE tb_giohang SET soLuong =? WHERE idGioHang =?';
  db.query(sql, [soLuong, idGioHang], callback);
}

const createOrder = (nguoiDungId, diaChi, tongTien, callback) => {
  const sql = `
    INSERT INTO tb_donhang (nguoiDungId, diaChi, tongTien)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [nguoiDungId, diaChi, tongTien], callback);
}

const addOrderDetails = (orderId, nguoiDungId, callback) => {
  const sql = `
    INSERT INTO tb_chitietdonhang (donHangId, sanPhamId, soLuong, gia, trangThai)
    SELECT ?, gh.sanPhamId, gh.soLuong, sp.gia, 'Chưa giao'
    FROM tb_giohang gh
    JOIN tb_sanpham sp ON gh.sanPhamId = sp.idSanPham
    WHERE gh.nguoiDungId = ?
  `;
  db.query(sql, [orderId, nguoiDungId], callback);
};

const deleteCart = (userId, callback) => {
  const sql = 'DELETE FROM tb_giohang WHERE nguoiDungId =?';
  db.query(sql, [userId], callback);
}

// const updateOrderStatus = (orderId, trangThai, callback) => {
//   const sql = 'UPDATE tb_donhang SET trangThai =? WHERE idDonHang =?';
//   db.query(sql, [trangThai, orderId], callback);
// }
module.exports = { findByProduct, addToCart, getCartById, updateQuantity, deleteFromCart, createOrder, addOrderDetails, deleteCart }