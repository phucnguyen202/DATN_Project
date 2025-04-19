const ProductModel = require('../../models/nhanVien/NhanVienModel')

class NhanVienController {
  async createProduct(req, res) {
    try {
      const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, hinhAnh, tonKho } = req.body;
      ProductModel.addProduct({
        tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho
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

  async getProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
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
      const { tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, hinhAnh, tonKho } = req.body;
      console.log('req.body::', req.body)
      const imageArray = hinhAnh ? hinhAnh.split(',').map(img => img.trim()) : [];
      const productId = req.query.id;
      ProductModel.updateProductById(
        {
          tenSanPham, gia, moTa, dongGoiGiaoHang, deXuat, canhBao, danhMucId, tonKho
        }, productId, (err, product) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'UPDATE_PRODUCT_ERROR',
              message: 'Có lỗi khi cập nhật sản phẩm'
            });
          }

          if (imageArray.length > 0) {
            const promises = imageArray.map((imageSrc) => {
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
          } else {
            return res.status(200).json({
              success: true,
              code: 'UPDATE_PRODUCT_SUCCESS',
              message: 'Cập nhật sản phẩm thành công'
            });
          }
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
          console.log(err)
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

  async getAllProducts(req, res) {
    try {
      ProductModel.getAllProducts((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_PRODUCTS_ERROR',
            message: 'Lỗi khi lấy tất cả sản phẩm',
          });
        }
        return res.status(200).json({
          success: true,
          code: 'GET_ALL_PRODUCTS_SUCCESS',
          message: 'Lấy tất cả sản phẩm thành công',
          data: result
        });
      })

    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_PRODUCTS_ERROR',
        message: 'Lỗi khi lấy tất cả sản phẩm',
      });
    }
  }

  async getProductById(req, res) {
    const { id } = req.query;
    try {
      ProductModel.getProductById(id, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_PRODUCT_BY_ID_ERROR',
            message: 'Lỗi khi lấy sản phẩm theo ID',
          });
        }
        return res.status(200).json({
          success: true,
          code: 'GET_PRODUCT_BY_ID_SUCCESS',
          message: 'Lấy sản phẩm theo ID thành công',
          data: result
        });
      })
    } catch {
      return res.status(500).json({
        success: false,
        code: 'GET_PRODUCT_BY_ID_ERROR',
        message: 'Lỗi khi lấy sản phẩm theo ID',
      });
    }
  }

  // lấy nhưng đơn hàng đã thanh toán, trang thái đã xác nhận
  async getAllOrder(req, res) {
    try {
      ProductModel.getAllOrderPayment((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_ORDER_ERROR',
            message: 'Lỗi khi lấy tất cả đơn hàng',
          });
        }
        if (result.length === 0) {
          return res.status(200).json({
            success: true,
            code: 'GET_ALL_ORDER_SUCCESS',
            message: 'Không có đơn hàng nào',
            data: result
          });
        }
        return res.status(200).json({
          success: true,
          code: 'GET_ALL_ORDER_SUCCESS',
          message: 'Lấy tất cả đơn hàng thành công',
          data: result
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_ORDER_ERROR',
        message: 'Lõi khi lấy tất cả đơn hàng',
      });
    }
  }

  // cập nhật trạng thái đơn hàng
  async updateOrderStatus(req, res) {
    try {
      const { trangThai, idDonHang } = req.body
      ProductModel.updateOrderStatus(trangThai, idDonHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_ORDER_STATUS_ERROR',
            message: 'Lỗi khi cập nhật trạng thái đơn hàng',
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy đơn hàng này'
          });
        }
        return res.status(200).json({
          success: true,
          code: 'UPDATE_ORDER_STATUS_SUCCESS',
          message: 'Cập nhật trạng thái đơn hàng thành công',
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_ORDER_STATUS_ERROR',
        message: 'Lỗi khi cập nhật trạng thái đơn hàng',
      });
    }
  }
  // Nhân viên xác nhận nhập hàng từ nhà cung cấp
  async confirmNhapHang(req, res) {
    try {
      const { idnhaphang } = req.query
      console.log('idnhaphang:::', idnhaphang)
      ProductModel.confirm_nhapHang(idnhaphang, (err, result) => {
        console.log("err::::", err)
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_NHAP_HANG_ERROR',
            message: 'Lỗi khi xác nhận nhập hàng từ nhà cung cấp',
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy nhập hàng này'
          });
        }
        return res.status(200).json({
          success: true,
          code: 'UPDATE_NHAP_HANG_SUCCESS',
          message: 'Xác nhận nhập hàng từ nhà cung cấp thành công',
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_NHAP_HANG_ERROR',
        message: 'Lỗi khi xác nhận nhập hàng từ nhà cung cấp',
      });
    }
  }
}
module.exports = new NhanVienController();
