
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_DATN'
})
db.connect((err) => {
  if (err) {
    console.log('Kết nối tới MySQL thất bại:', err);
    return;
  }
  console.log('Kết nối tới MySQL thành công');
});
module.exports = db;