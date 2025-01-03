const db = require('../../config/connect')


const getAllAccountSupplier = (callback) => {
  const sql = 'SELECT * FROM tb_nhacungcap';
  db.query(sql, callback);
}

// cập nhật trang thái nhà cung cấp
const updateSupplierStatus = (idNhaCungCap, trangThai, callback) => {
  const sql = `
    UPDATE tb_nhacungcap
    SET trangThai = ?
    WHERE idNhaCungCap = ?;
  `;
  db.query(sql, [trangThai, idNhaCungCap], callback);
};

// cập quyền cho nhà cung cấp
const assignSupplierRole = (nguoiDungId, callback) => {
  const sql = `
    UPDATE nguoidung
    SET quyen = 'nhacungcap'
    WHERE idNguoiDung = ?;
  `;
  db.query(sql, [nguoiDungId], callback);
};

// tạo phiếu nhập hàng
const createNhapHang = (sanPhamId, soLuong, ghiChu, callback) => {
  const sql = `INSERT INTO tb_nhaphang (sanPhamId, soLuong, ghiChu)
  VALUES (?, ?, ?)`;
  db.query(sql, [sanPhamId, soLuong, ghiChu], callback);
};

// lây danh sách nhập hàng
const getAllNhapHang = (callback) => {
  const sql = 'SELECT * FROM tb_nhapHang';
  db.query(sql, callback);
}

// thống kê dữ liệu theo ngay
const getStatistical_day = (callback) => {
  const sql = `
    SELECT 
        dh.thoiGianDatHang AS ngay,
        COUNT(DISTINCT ctdh.idChiTietDonHang) AS tong_so_don_hang,
        SUM(ctdh.soLuong * ctdh.gia) AS tong_doanh_thu
    FROM 
        tb_donhang dh
    JOIN 
        tb_chitietdonhang ctdh ON dh.idDonHang = ctdh.donHangId
    WHERE 
        dh.thanhToan = 'Đã thanh toán' 
        AND dh.trangThaiGiaoHang = 'Đã giao' 
        AND dh.trangThai = 'Đã xác nhận'
    GROUP BY 
        dh.thoiGianDatHang
    ORDER BY 
        dh.thoiGianDatHang
    `
  db.query(sql, callback);
}

// thống kê dữ liệu theo tháng
const getStatistical_month = (callback) => {
  const sql = `
      SELECT 
        DATE_FORMAT(dh.thoiGianDatHang, '%Y-%m') AS month,
        COUNT(DISTINCT ctdh.idChiTietDonHang) AS tong_so_don_hang,
        SUM(ctdh.soLuong * ctdh.gia) AS revenue
      FROM 
        tb_donhang dh
      JOIN 
        tb_chitietdonhang ctdh ON dh.idDonHang = ctdh.donHangId
      WHERE 
        dh.thanhToan = 'Đã thanh toán' 
        AND dh.trangThaiGiaoHang = 'Đã giao' 
        AND dh.trangThai = 'Đã xác nhận'
      GROUP BY 
        DATE_FORMAT(dh.thoiGianDatHang, '%Y-%m')
      ORDER BY 
        dh.thoiGianDatHang
    `
  db.query(sql, callback);
}

module.exports = {
  getAllAccountSupplier, getStatistical_month, updateSupplierStatus, assignSupplierRole, createNhapHang, getAllNhapHang, getStatistical_day
}