const db = require('../../config/connect')


const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM nguoidung';
  db.query(sql, callback);
};

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



module.exports = { getAllUsers, addDanhMuc, findByDanhMuc, getAllDanhMuc };