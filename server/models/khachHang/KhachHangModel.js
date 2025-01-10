const db = require('../../config/connect')


//Tìm sản phẩm trong giỏ hàng
const findByProductForGioHang = (idSanPham, nguoiDungId, callback) => {
  const sql = 'SELECT * FROM tb_gioHang WHERE nguoiDungId = ? AND sanPhamId = ?';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

// thêm sản phẩm vào giỏ hàng
const addToCart = (idSanPham, nguoiDungId, callback) => {
  const sql = 'INSERT INTO tb_gioHang (nguoiDungId, sanPhamId, soLuong) VALUES (?, ?, 1)';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

// Lấy danh sách sản phẩm theo id
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

// tạo đơn hàng
const createOrder = (nguoiDungId, diaChi, tongTien, callback) => {
  const sql = `
    INSERT INTO tb_donhang (nguoiDungId, diaChi, tongTien)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [nguoiDungId, diaChi, tongTien], callback);
}

// thêm chi tiết sản phẩm
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

// lấy  chi tiết đơn hàng theo id
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

// lấy đơn hàng chưa thanh toán của người dùng
// trong trang payment
const getOrderByIdAndpayment = (userId, callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE nguoiDungId = ? AND thanhToan ='Chưa thanh toán'`
  db.query(sql, [userId], callback);
}

// lấy tất cả đơn hàng của người dùng
const getAllOrderById = (userId, callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE nguoiDungId =?`
  db.query(sql, [userId], callback);
}


// hủy đơn hàng
// những đơn hàng chưa được xác nhận và chưa giao thì được hủy
// những đơn hàng đã được xác nhận và đang giao thì không được hủy
// những đơn hàng đã giao cũng không được hủy
const cancelOrder = (nguoiDungId, idDonHang, callback) => {
  const sqlCheckOrder = `
    SELECT *
    FROM tb_donhang
    WHERE idDonHang = ? AND nguoiDungId = ? AND trangThai = 'Chờ xác nhận' AND trangThaiGiaoHang = 'Chưa giao'
  `
  db.query(sqlCheckOrder, [idDonHang, nguoiDungId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.length === 0) {
      return callback(new Error('Đơn hàng không tồn tại hoặc đã chuyển sang trạng thái đã giao'), null);
    }
    const sqlCancelOrder = `
    UPDATE 
      tb_donhang 
    SET 
      trangThai ='Đã hủy', thanhToan= 'Chưa thanh toán'
    WHERE 
      idDonHang =? AND nguoiDungId=?`
    db.query(sqlCancelOrder, [idDonHang, nguoiDungId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      if (result.affectedRows === 0) {
        return callback(new Error('Đơn hàng không tồn tại hoặc đã chuyển sang trạng thái đã giao'), null);
      }
      return callback(null, { message: 'Đơn hàng đã được hủy thành công' })
    });
  })
}

// cập nhật địa chỉ giao hàng
const updateAddressOrder = (diaChi, idDonHang, callback) => {
  const sql = `UPDATE tb_donhang SET diaChi = ? WHERE idDonHang = ?`
  db.query(sql, [diaChi, idDonHang], callback);
}

// xóa giỏ hàng
const deleteCart = (userId, callback) => {
  const sql = 'DELETE FROM tb_giohang WHERE nguoiDungId =?';
  db.query(sql, [userId], callback);
}

// thanh  toán thành công thì cập nhật trạng thai thanh toán
const updateOrderStatusPayment = (idNguoiDung, idDonHang, callback) => {
  const sql = `
    UPDATE tb_donhang
    SET thanhToan = 'Đã thanh toán'
    WHERE idDonHang IN (?) AND nguoiDungId = ?;
  `;
  db.query(sql, [idDonHang, idNguoiDung], callback);
}

// đăng ký nhà cung cấp
const registerSupplier = (nguoiDungId, tenNhaCungCap, diaChi, soDienThoai, callback) => {
  const sql = `
    INSERT INTO tb_nhacungcap (nguoiDungId, tenNhaCungCap, diaChi, soDienThoai )
    VALUES (?,?,?,?);
  `;
  db.query(sql, [nguoiDungId, tenNhaCungCap, diaChi, soDienThoai], callback);
}

// tim san phẩm đã có trong danh sách yêu thích hay chưa 
const findByProductForWishList = (idSanPham, nguoiDungId, callback) => {
  const sql = 'SELECT * FROM tb_danhsach_yeuthich WHERE nguoiDungId = ? AND sanPhamId = ?';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

// thêm sản phẩm vào danh sách yêu thích
const addToWishList = (idSanPham, nguoiDungId, callback) => {
  const sql = 'INSERT INTO tb_danhsach_yeuthich (nguoiDungId, sanPhamId) VALUES (?,?)';
  db.query(sql, [nguoiDungId, idSanPham], callback);
}

// cập nhật só lượng yêu thích trong bảng sản phẩm
const updateQuantityWishList = (idSanPham, callback) => {
  const sql = `UPDATE tb_sanpham 
                SET yeuThich = yeuThich + 1 
                WHERE idSanPham = ? `;
  db.query(sql, [idSanPham], callback);
}

// xóa sản phẩm khoi danh sách yêu thích
const removeFromFavorites = (sanPhamId, nguoiDungId, callback) => {
  const sql = `DELETE FROM tb_danhsach_yeuthich  WHERE nguoiDungId = ? AND sanPhamId = ?`
  db.query(sql, [nguoiDungId, sanPhamId], callback);
}

// giảm só lượng yêu thích trong bảng sản phẩm
// const updateQuantityWishList = (idSanPham, callback) => {
//   const sql = `UPDATE tb_sanpham 
//                 SET yeuThich = yeuThich + 1 
//                 WHERE idSanPham = ? `;
//   db.query(sql, [idSanPham], callback);
// }

// lấy danh sách yêu thích bằng id người dùng
const getWishListById = (nguoiDungId, callback) => {
  const sql = `
    SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_danhsach_yeuthich dy
    JOIN 
      tb_sanpham sp ON dy.sanPhamId = sp.idSanPham
    LEFT JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc 
    LEFT JOIN 
      tb_hinhsanpham hsp ON sp.idSanPham = hsp.sanPhamId
    WHERE 
      dy.nguoiDungId = ?
    GROUP BY 
      sp.idSanPham
  `;
  db.query(sql, [nguoiDungId], callback);
};

// lây danh sách sản phẩm liên quan
const getRelatedProducts = (idSanPham, callback) => {
  const sql = `
      SELECT 
        sp.*,
        dm.tenDanhMuc,
        GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
      FROM tb_sanpham sp
      LEFT JOIN 
        tb_hinhsanpham hsp ON sp.idSanPham = hsp.sanPhamId
      LEFT JOIN 
        tb_danhMuc dm ON sp.danhMucId = dm.idDanhMuc
      WHERE 
        sp.danhMucId = (SELECT danhMucId FROM tb_sanpham WHERE idSanPham = ?) 
      AND sp.idSanPham != ?
      GROUP BY 
        sp.idSanPham
    `;
  db.query(sql, [idSanPham, idSanPham], callback);
}

module.exports = {
  findByProductForGioHang, addToCart, getRelatedProducts, getCartById, updateQuantity, cancelOrder,
  updateAddressOrder, getOrderByIdAndpayment, deleteFromCart, registerSupplier,
  createOrder, addOrderDetails, deleteCart, getOrderDetails, removeFromFavorites, getAllOrderById,
  findByProductForWishList, addToWishList, updateQuantityWishList, getWishListById, updateOrderStatusPayment
}