
const ProductModel = require('../../models/nhanVien/NhanVienModel')


class NhanVienController {

  async createProduct(req, res) {
    try {
      const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, hinhAnh } = req.body;
      console.log(req.body);
      ProductModel.addProduct({
        tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId
      }, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: 'Có lỗi khi thêm sản phẩm'
          })
        }
        // Sau khi sản phẩm được thêm thành công, thêm hình ảnh liên quan
        const productId = result.insertId;
        const promises = hinhAnh.map((imageSrc) => {
          return new Promise((resolve, reject) => {
            ProductModel.addImage(productId, imageSrc, (err, result) => {
              if (err) reject(err);
              resolve(result);
            })
          })
        })
        Promise.all(promises)
          .then((results) => {
            return res.status(200).json({
              message: 'Thêm sản phẩm thành công'
            })
          })
          .catch((err) => {
            return res.status(500).json({
              message: 'Có lỗi khi thêm hình ảnh sản phẩm'
            })
          })
      })
    } catch (e) {
      return res.status(500).json({
        message: 'Có lỗi khi thêm sản phẩm'
      })
    }
  }

}
module.exports = new NhanVienController();
