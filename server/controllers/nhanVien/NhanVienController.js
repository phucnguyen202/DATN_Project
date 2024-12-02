
const ProductModel = require('../../models/nhanVien/NhanVienModel')


class NhanVienController {
  async createProduct(req, res) {
    try {
      const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, hinhAnh } = req.body;
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
    } catch (err) {
      return res.status(500).json({
        message: 'Có lỗi khi thêm sản phẩm',
        error: err
      })
    }
  }

  async getAllProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1; // trang hiện tại
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      ProductModel.getTotalProducts((err, result) => {
        if (err) {
          return res.status(500).json(
            {
              message: 'Lỗi khi lấy tổng số sản phẩm',
              error: err
            }
          );
        }
        const totalProducts = result[0].total;
        const totalPages = Math.ceil(totalProducts / limit);
        ProductModel.getProductsByPage(limit, offset, (err, products) => {
          if (err) {
            return res.status(500).json({
              message: 'Lỗi khi lấy danh sách sản phẩm',
              error: err
            });
          }
          return res.status(200).json({
            message: 'Lấy danh sách sản phẩm thành công',
            data: {
              page,
              totalPages,
              totalProducts,
              products
            }
          });
        })
      })
    } catch (err) {
      return res.status(500).json(
        {
          message: 'Lỗi khi lấy danh sách sản phẩm',
          error: err
        });
    }
  }



}
module.exports = new NhanVienController();
