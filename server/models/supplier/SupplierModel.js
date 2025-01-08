const db = require('../../config/connect')


// Lấy tất cả nhập hàng của một người dùng theo id người dùng đã được làm nhà cung cấp
const getAllNhapHangById = (idNguoiDung, callback) => {
  const sql = `
  SELECT 
    nh.*,
    ncc.tenNhaCungCap 
  FROM 
    tb_nhaphang nh
  JOIN 
    tb_nhacungcap ncc 
  ON 
    nh.nhaCungCapId = ncc.idNhaCungCap
  WHERE 
    ncc.nguoiDungId = ?`
  db.query(sql, [idNguoiDung], callback);
};

// cập nhật trạng thái của yêu cầu nhập hàng
const updateStatusNhapHang = (trangThai, idNhapHang, callback) => {
  const sql = `
    UPDATE tb_nhaphang
    SET trangThai = ?
    WHERE idNhapHang = ?
  `
  db.query(sql, [trangThai, idNhapHang], callback);
};

// hủy yêu cầu nhập hàng
const cancelNhapHang = (trangThai, idNhapHang, callback) => {
  const sql = `
    UPDATE tb_nhaphang
    SET trangThai = ?
    WHERE idNhapHang = ?
  `
  db.query(sql, [trangThai, idNhapHang], callback);
}

module.exports = {
  getAllNhapHangById, updateStatusNhapHang, cancelNhapHang
}