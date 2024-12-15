
const KhachHangModel = require('../../models/khachHang/KhachHangModel')

class KhachHangController {
  async addProductToCart(req, res) {
    try {
      const { idSanPham, nguoiDungId } = req.body;
      KhachHangModel.findByProduct(idSanPham, nguoiDungId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'FIND_PRODUCT_ERROR',
            message: 'Có lỗi khi tìm sản phẩm'
          });
        }
        if (result.length === 0) {
          KhachHangModel.addToCart(idSanPham, nguoiDungId, (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                code: 'ADD_PRODUCT_ERROR',
                message: 'Có lỗi khi thêm sản phẩm vào giỏ hàng'
              });
            }
            return res.status(200).json({
              success: true,
              message: 'Thêm sản phẩm vào giỏ hàng thành công'
            });
          })
        } else {
          return res.status(400).json({
            success: false,
            code: 'FIND_PRODUCT_ERROR',
            message: 'Sản phẩm đã có trong giỏ hàng. Vui lòng vào giỏ hàng để cập nhật số lượng'
          })
        }
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'ADD_PRODUCT_ERROR',
        message: 'Có lỗi khi thêm sản phẩm vào giỏ hàng'
      });

    }
  }
  async getCartById(req, res) {
    try {
      const { userId } = req.query;
      KhachHangModel.getCartById(userId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_CART_INFO_ERROR',
            message: 'Có lỗi khi lấy sản phẩm trong giỏ hàng'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy sản phẩm trong giỏ hàng thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_CART_INFO_ERROR',
        message: 'Có lỗi khi lấy sản phẩm trong giỏ hàng'
      });
    }
  }
  async updateQuantityProduct(req, res) {
    try {
      const { idGioHang, soLuong } = req.body;
      KhachHangModel.updateQuantity(soLuong, idGioHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_QUANTITY_ERROR',
            message: 'Cập nhật số lượng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để cập nhật'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Cập nhật số lượng sản phẩm thành công'
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_QUANTITY_ERROR',
        message: 'Cập nhật số lượng thất bại'
      })
    }
  }

  async deleteProductInCart(req, res) {
    try {
      const { idGioHang } = req.query;
      KhachHangModel.deleteFromCart(idGioHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'DELETE_PRODUCT_ERROR',
            message: 'Xóa sản phẩm khỏi giỏ hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để cập nhật'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Xóa sản phẩm khỏi giỏ hàng thành công'
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'DELETE_PRODUCT_ERROR',
        message: 'Không tìm thấy giỏ hàng để cập nhật'
      })
    }
  }

  async addProductToGioHang(req, res) {
    try {
      const { nguoiDungId, diaChi, tongTien } = req.body;
      console.log(req.body)
      KhachHangModel.createOrder(nguoiDungId, diaChi, tongTien, (err, result) => {
        console.log(err)

        if (err) {
          return res.status(500).json({
            success: false,
            code: 'CREATE_ORDER_ERROR',
            message: 'Tạo đơn hàng thất bại'
          });
        }
        const orderId = result.insertId;
        KhachHangModel.addOrderDetails(orderId, nguoiDungId, (err, orderDetail) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'ADD_ORDER_DETAILS_ERROR',
              message: 'Thêm chi tiết đơn hàng thất bại'
            });
          }
          return res.status(200).json({
            success: true,
            message: 'Tạo đơn hàng thành công',
            data: orderId
          });
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'CREATE_ORDER_ERROR',
        message: 'Tạo đơn hàng thất bại'
      });
    }
  }

  async deleteCart(req, res) {
    try {
      const { userId } = req.query
      KhachHangModel.deleteCart(userId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'DELETE_CART_ERROR',
            message: 'Xóa giỏ hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để xóa'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Xóa giỏ hàng thành công'
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'DELETE_CART_ERROR',
        message: 'Xóa giỏ hàng thất bại'
      });
    }
  }
}

module.exports = new KhachHangController();