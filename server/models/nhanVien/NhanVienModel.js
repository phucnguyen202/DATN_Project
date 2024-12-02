const db = require('../../config/connect')

// them san pham
const addProduct = (product, callback) => {
  const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId } = product;
  const sql = 'INSERT INTO tb_sanpham (tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId], callback);
}

// Thêm hình ảnh sản phẩm
const addImage = (productId, imageSrc, callback) => {
  const sql = 'INSERT INTO tb_hinhsanpham (sanPhamId, hinhAnh) VALUES (?, ?)';
  db.query(sql, [productId, imageSrc], callback);
}

// Lấy danh sách sản phẩm
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

module.exports = { addProduct, addImage, getProductsByPage, getTotalProducts }
