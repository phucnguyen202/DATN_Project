const db = require('../../config/connect')

// them san pham
const addProduct = (product, callback) => {
  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho } = product;
  const sql = 'INSERT INTO tb_sanpham (tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho], callback);
}

// Thêm hình ảnh sản phẩm
const addImage = (productId, imageSrc, callback) => {
  const sql = 'INSERT INTO tb_hinhsanpham (sanPhamId, hinhAnh) VALUES (?, ?)';
  db.query(sql, [productId, imageSrc], callback);
}

// Lấy danh sách sản phẩm phân trang
const getProductsByPage = (limit, offset, callback) => {
  const sql = `
  SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    GROUP BY 
      sp.idSanPham
    LIMIT ? OFFSET ?;
  `;
  db.query(sql, [limit, offset], callback);
};

// lấy tổng sản phẩm
const getTotalProducts = (callback) => {
  const sql = 'SELECT COUNT(*) as total FROM tb_sanpham';
  db.query(sql, callback);
}

// update thông tin sản phẩm
const updateProductById = (product, productId, callback) => {
  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho } = product;
  const sql = 'UPDATE tb_sanpham SET tenSanPham =?, gia =?, moTa =?, dongGoiGiaoHang =?, deXuat =?, canhBao =?, danhMucId =?, tonKho =? WHERE idSanPham =?';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho, productId], callback);
}

// update ảnh sản phẩm
const updateImageById = (productId, imageSrc, callback) => {
  const sql = 'UPDATE tb_hinhsanpham SET hinhAnh =? WHERE sanPhamId =?';
  db.query(sql, [imageSrc, productId], callback);
}

// Xóa img sản phẩm
const deleteImagesbyId = (productId, callback) => {
  const deleteImagesSql = 'DELETE FROM tb_hinhsanpham WHERE sanPhamId = ?';
  db.query(deleteImagesSql, [productId], callback);
}
//  xóa sản phẩm bằng id
// đang bị lỗi nên vì sản phẩm bên trong chi tiết sản phảm nữa
const deleteProductById = (productId, callback) => {
  const deleteDetailsSql = `
    DELETE FROM tb_chitietdonhang
    WHERE sanPhamId = ?;
  `;
  const deleteFavoritesSql = `
    DELETE FROM tb_danhsach_yeuthich
    WHERE sanPhamId = ?;
  `;
  const deleteProductSql = `
    DELETE FROM tb_sanpham
    WHERE idSanPham = ?;
  `;

  // Thực hiện xóa trong giao dịch
  db.beginTransaction((err) => {
    if (err) {
      return callback(err); // Lỗi khi bắt đầu giao dịch
    }
    // Bước 1: Xóa chi tiết đơn hàng
    db.query(deleteDetailsSql, [productId], (err) => {
      if (err) {
        return db.rollback(() => callback(err)); // Hủy giao dịch nếu lỗi
      }
      // Bước 2: Xóa sản phẩm khỏi danh sách yêu thích
      db.query(deleteFavoritesSql, [productId], (err) => {
        if (err) {
          return db.rollback(() => callback(err)); // Hủy giao dịch nếu lỗi
        }
        // Bước 3: Xóa sản phẩm khỏi bảng tb_sanpham
        db.query(deleteProductSql, [productId], (err) => {
          if (err) {
            return db.rollback(() => callback(err)); // Hủy giao dịch nếu lỗi
          }
          // Hoàn tất giao dịch
          db.commit((err) => {
            if (err) {
              return db.rollback(() => callback(err)); // Hủy giao dịch nếu commit lỗi
            }
            callback(null, { message: 'Xóa sản phẩm và các dữ liệu liên quan thành công!' });
          });
        });
      });
    });
  });
}

//lấy tất cả sản phẩm
const getAllProducts = (callback) => {
  const sql = `
    SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    GROUP BY 
      sp.idSanPham`;
  db.query(sql, callback);
}

// lấy sản phẩm theo id
const getProductById = (productId, callback) => {
  const sql = `
    SELECT 
      sp.*,
      dm.tenDanhMuc,
      GROUP_CONCAT(hsp.hinhAnh) AS hinhAnh
    FROM 
      tb_sanpham sp
    JOIN 
      tb_danhmuc dm ON sp.danhMucId = dm.idDanhMuc
    LEFT JOIN 
      tb_hinhSanPham hsp ON sp.idSanPham = hsp.sanPhamId
    WHERE 
      sp.idSanPham = ?
    GROUP BY 
      sp.idSanPham;`;
  db.query(sql, [productId], callback);
}

// lấy tất cả đơn hàng mà người đùng đã đặt thanh toán và trang thái đã xác nhận
const getAllOrderPayment = (callback) => {
  const sql = `SELECT * FROM tb_donhang WHERE thanhToan ='Đã thanh toán' AND trangThai = 'Đã xác nhận'`
  db.query(sql, callback);
}

// cập nhật trạng thái đơn hàng, phần này vẫn chưa có trừ đơn hàng trong tonKho
const updateOrderStatus = (trangThai, idDonHang, callback) => {
  const sql = `UPDATE tb_donhang SET trangThai =? WHERE idDonHang =?`;
  // Cập nhật trạng thái đơn hàng
  db.query(sql, [trangThai, idDonHang], (err, result) => {
    if (err) {
      return callback(err);
    }
    // Nếu trạng thái là "Đã xác nhận", tiến hành trừ tồn kho
    if (trangThai === 'Đã xác nhận') {
      const sqlGetItems = `SELECT sanPhamId, soLuong FROM tb_chitietdonhang WHERE donHangId = ?`;
      db.query(sqlGetItems, [idDonHang], (err, items) => {
        // console.log('items::::', items)
        if (err) return callback(err);
        // Trừ tồn kho cho từng sản phẩm trong đơn hàng
        const updateStock = items.map(item => {
          return new Promise((resolve, reject) => {
            const sqlUpdateStock = `UPDATE tb_sanpham SET tonKho = tonKho - ? WHERE idSanPham = ?`;
            db.query(sqlUpdateStock, [item.soLuong, item.sanPhamId], (err, res) => {
              if (err) reject(err);
              else resolve(res);
            });
          });
        });
        // Chờ tất cả các cập nhật tồn kho hoàn thành
        Promise.all(updateStock)
          .then(() => callback(null, "Cập nhật trạng thái và trừ tồn kho thành công"))
          .catch(callback);
      })
    } else {
      // Nếu không cần trừ tồn kho
      callback(null, "Cập nhật trạng thái đơn hàng thành công");
    }
  });
}

// xác nhận nhập hàng
const confirm_nhapHang = (idNhapHang, callback) => {
  const sql = `
    UPDATE tb_nhapHang
    SET xacNhan = 'Đã xác nhận'
    WHERE idNhapHang = ?
  `;
  db.query(sql, [idNhapHang], (err, result) => {
    if (err) {
      return callback(err);
    }
    const sqlGetSanPham = `
      SELECT sanPhamId, soLuong
      FROM tb_nhaphang
      WHERE idNhapHang = ? `
    db.query(sqlGetSanPham, [idNhapHang], (err, sanPham) => {
      if (err) {
        return callback(err);
      }
      if (sanPham.length > 0) {
        const { sanPhamId, soLuong } = sanPham[0];
        // Cập nhật tồn kho trong bảng tb_sanPham
        const sqlUpdateTonKho = `
          UPDATE tb_sanpham
          SET tonKho = CAST(tonKho AS SIGNED) + ?
          WHERE idSanPham = ?
        `;
        db.query(sqlUpdateTonKho, [soLuong, sanPhamId], callback);
      } else {
        return callback(new Error('Không tìm thấy sản phẩm tương ứng với idNhapHang!'));
      }
    });
  })
  // Nếu trạng thái được cập nhật thành công, tiếp tục xử lý tồn kho

}
module.exports = {
  updateProductById, updateImageById, getAllProducts, getProductById, getAllOrderPayment, updateOrderStatus,
  addProduct, addImage, getProductsByPage, getTotalProducts, deleteProductById, deleteImagesbyId, confirm_nhapHang
}
