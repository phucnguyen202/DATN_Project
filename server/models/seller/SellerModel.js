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

module.exports = {
  getAllAccountSupplier, updateSupplierStatus, assignSupplierRole
}