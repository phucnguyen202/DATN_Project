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

const getOrderDetails = (idDonHang, callback) => {
  const sql = `
    SELECT
        cdh.idChiTietDonHang,
        cdh.donHangId,
        cdh.sanPhamId,
        sp.tenSanPham,
        sp.gia,
        cdh.soLuong
    FROM
        tb_chitietdonhang cdh
    JOIN
        tb_sanpham sp ON cdh.sanPhamId = sp.idSanPham
    WHERE
        cdh.donHangId = ?;
  `
  db.query(sql, [idDonHang], callback);
};

const getOrderById = (userId, callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE nguoiDungId = ?`
  db.query(sql, [userId], callback);
}

const updateAddressOrder = (diaChi, idDonHang, callback) => {
  const sql = `UPDATE tb_donhang SET diaChi = ? WHERE idDonHang = ?`
  db.query(sql, [diaChi, idDonHang], callback);
}

const deleteCart = (userId, callback) => {
  const sql = 'DELETE FROM tb_giohang WHERE nguoiDungId =?';
  db.query(sql, [userId], callback);
}

// const updateOrderStatus = (orderId, trangThai, callback) => {
//   const sql = 'UPDATE tb_donhang SET trangThai =? WHERE idDonHang =?';
//   db.query(sql, [trangThai, orderId], callback);
// }


// đăng ký nhà cung cấp
const registerSupplier = (nguoiDungId, tenNhaCungCap, diaChi, soDienThoai, callback) => {
  const sql = `
    INSERT INTO tb_nhacungcap (nguoiDungId, tenNhaCungCap, diaChi, soDienThoai )
    VALUES (?,?,?,?);
  `;
  db.query(sql, [nguoiDungId, tenNhaCungCap, diaChi, soDienThoai], callback);
}

module.exports = {
  findByProduct, addToCart, getCartById, updateQuantity,
  updateAddressOrder, getOrderById, deleteFromCart, registerSupplier,
  createOrder, addOrderDetails, deleteCart, getOrderDetails
}