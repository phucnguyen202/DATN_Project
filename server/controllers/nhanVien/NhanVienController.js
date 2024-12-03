
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
            success: false,
            code: 'CREATE_PRODUCT_ERROR',
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
              success: true,
              code: 'CREATE_PRODUCT_SUCCESS',
              message: 'Thêm sản phẩm thành công'
            })
          })
          .catch((err) => {
            return res.status(500).json({
              success: false,
              code: 'UPLOAD_IMAGE_ERROR',
              message: 'Có lỗi khi thêm hình ảnh sản phẩm'
            })
          })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_PRODUCT_ERROR',
        message: 'Có lỗi khi cập nhật sản phẩm'
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
              success: false,
              code: 'GET_TOTAL_PRODUCTS_ERROR',
              message: 'Lỗi khi lấy tổng số sản phẩm',
            }
          );
        }
        const totalProducts = result[0].total;
        const totalPages = Math.ceil(totalProducts / limit);
        ProductModel.getProductsByPage(limit, offset, (err, products) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'GET_PRODUCTS_ERROR',
              message: 'Lỗi khi lấy danh sách sản phẩm',
            });
          }
          return res.status(200).json({
            success: true,
            code: 'GET_PRODUCTS_SUCCESS',
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
          success: false,
          code: 'GET_PRODUCTS_ERROR',
          message: 'Lỗi khi lấy danh sách sản phẩm',
        });
    }
  }

  async updateProduct(req, res) {
    try {
      const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, hinhAnh } = req.body;
      const productId = req.query.id;
      ProductModel.updateProductById(
        {
          tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId
        }, productId, (err, product) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'UPDATE_PRODUCT_ERROR',
              message: 'Có lỗi khi cập nhật sản phẩm'
            });
          }

          const promises = hinhAnh.map((imageSrc) => {
            return new Promise((resolve, reject) => {
              ProductModel.updateImageById(productId, imageSrc, (err, result) => {
                if (err) reject(err);
                resolve(result);
              })
            })
          })
          Promise.all(promises)
            .then((results) => {
              return res.status(200).json({
                success: true,
                code: 'UPDATE_PRODUCT_SUCCESS',
                message: 'Cập nhật sản phẩm thành công'
              })
            })
            .catch((err) => {
              return res.status(500).json({
                success: false,
                code: 'UPDATE_IMAGE_ERROR',
                message: 'Có lỗi khi cập nhật hình ảnh sản phẩm'
              })
            })
        }
      )
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_PRODUCT_ERROR',
        message: 'Cập nhật sản phẩm không thành công',
      })
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.query

      ProductModel.deleteImagesbyId(id, (err, img) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'DELETE_IMAGE_ERROR',
            message: 'Có lỗi khi xóa ảnh sản phẩm'
          });
        }
        ProductModel.deleteProductById(id, (err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'DELETE_PRODUCT_ERROR',
              message: 'Có lỗi khi xóa sản phẩm'
            });
          }
          return res.status(200).json({
            success: true,
            code: 'DELETE_PRODUCT_SUCCESS',
            message: 'Xóa sản phẩm thành công'
          });
        });
      })

    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'DELETE_PRODUCT_ERROR',
        message: 'Lỗi khi xóa sản phẩm'
      })
    }
  }
}
module.exports = new NhanVienController();
