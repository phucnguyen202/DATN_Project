const db = require('../../config/connect')


// cập nhật trạng thái giao hàng
const updateDeliveryStatus = (trangThaiGiaoHang, idDonHang, callback) => {
  const sql = `UPDATE tb_donhang SET trangThaiGiaoHang =? WHERE idDonHang =?`;
  db.query(sql, [trangThaiGiaoHang, idDonHang], callback);
}

const orderInfo = (idDonHang, callback) => {
  const sql = `SELECT nd.idNguoiDung 
           FROM tb_donhang dh 
           JOIN nguoidung nd ON dh.nguoiDungId = nd.idNguoiDung 
           WHERE dh.idDonHang = ? `
  db.query(sql, [idDonHang], callback)
}

// lấy tất cả đơn hàng mà người đùng đã đặt thanh toán
const getAllOrderPayment = (callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE thanhToan ='Đã thanh toán'`
  db.query(sql, callback);
}
module.exports = {
  updateDeliveryStatus, getAllOrderPayment, orderInfo
}