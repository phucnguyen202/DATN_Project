const db = require('../../config/connect')


const getAllAccountSupplier = (callback) => {
  const sql = 'SELECT * FROM tb_nhacungcap';
  db.query(sql, callback);
}

// lấy danh sách các nhà cung cấp đã duyệt
const getApprovedSuppliers = (callback) => {
  const sql = `
    SELECT idNhaCungCap, tenNhaCungCap
    FROM tb_nhacungcap
    WHERE trangThai = 'Đã phê duyệt'
  `;
  db.query(sql, callback);
}

// cập nhật trang thái nhà cung cấp
const updateSupplierStatus = (idNhaCungCap, trangThai, callback) => {
  const sql = `
    UPDATE tb_nhacungcap
    SET trangThai = ?
    WHERE idNhaCungCap = ?
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
const createNhapHang = (sanPhamId, soLuong, ghiChu, nhaCungCapId, callback) => {
  const sql = `INSERT INTO tb_nhaphang (sanPhamId, soLuong, ghiChu, nhaCungCapId)
  VALUES (?, ?, ?, ?)`;
  db.query(sql, [sanPhamId, soLuong, ghiChu, nhaCungCapId], callback);
};

// lấy danh sách nhập hàng
const getAllNhapHang = (callback) => {
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
`;
  db.query(sql, callback);
}

// lây danh sách nhập hàng đã được xác nhận
const getConfirmedNhapHang = (callback) => {
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
    nh.xacNhan = 'Đã xác nhận'
`;
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

// tim xem danh muc da ton tai hay chua
const findByDanhMuc = (tenDanhMuc, callback) => {
  const sql = 'SELECT * FROM tb_danhmuc WHERE tenDanhMuc = ?';
  db.query(sql, [tenDanhMuc], callback);
};
const getAllDanhMuc = (callback) => {
  const sql = 'SELECT * FROM tb_danhmuc';
  db.query(sql, callback);
}
const addDanhMuc = (tenDanhMuc, callback) => {
  const sql = 'INSERT INTO tb_danhmuc (tenDanhMuc) VALUES (?)';
  db.query(sql, tenDanhMuc, callback);
}
module.exports = {
  getAllAccountSupplier, findByDanhMuc, getAllDanhMuc, addDanhMuc, getStatistical_month, getApprovedSuppliers, getConfirmedNhapHang, updateSupplierStatus, assignSupplierRole, createNhapHang, getAllNhapHang, getStatistical_day
}