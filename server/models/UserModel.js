const db = require('../config/connect')


const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM nguoidung';
  db.query(sql, callback);
};



module.exports = { getAllUsers };