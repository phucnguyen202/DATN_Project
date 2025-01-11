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

// tao san pham
const createProductSupplier = (product, callback) => {
  const { tenSanPhamNCC, gia, moTa, danhMucId, soLuong, hinhAnh, nguoiDungId } = product;
  const sql = 'INSERT INTO tb_sanpham_nhacungcap (tenSanPhamNCC, gia, moTa, danhMucId, soLuong, hinhAnh, nguoiDungId) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [tenSanPhamNCC, gia, moTa, danhMucId, soLuong, hinhAnh, nguoiDungId], callback);
}

// lay danh sach sanr pham
const getAllProductSupplier = (callback) => {
  const sql = `
   SELECT 
      sp.*,
      nc.idNhaCungCap,
      nc.tenNhaCungCap,
      nc.diaChi,
      nc.soDienThoai,
      dm.tenDanhMuc
    FROM 
      tb_sanpham_nhacungcap sp
    JOIN 
      tb_nhacungcap nc 
      ON sp.nguoiDungId = nc.nguoiDungId
    LEFT JOIN 
      tb_danhmuc dm 
      ON sp.danhMucId = dm.idDanhMuc
  `
  db.query(sql, callback);
}

// update san pham

module.exports = {
  getAllNhapHangById, getAllProductSupplier, updateStatusNhapHang, cancelNhapHang, createProductSupplier
}