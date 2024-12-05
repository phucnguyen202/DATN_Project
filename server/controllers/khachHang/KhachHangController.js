
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
}

module.exports = new KhachHangController();